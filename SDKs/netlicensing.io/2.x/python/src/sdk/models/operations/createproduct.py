import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security

class CreateProductRequestBodyVatModeEnum(str, Enum):
    GROSS = "GROSS"
    NET = "NET"


@dataclasses.dataclass
class CreateProductRequestBody:
    active: bool = dataclasses.field(metadata={'form': { 'field_name': 'active' }})
    name: str = dataclasses.field(metadata={'form': { 'field_name': 'name' }})
    version: str = dataclasses.field(metadata={'form': { 'field_name': 'version' }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'description' }})
    licensee_auto_create: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'licenseeAutoCreate' }})
    licensing_info: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'licensingInfo' }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'number' }})
    vat_mode: Optional[CreateProductRequestBodyVatModeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'vatMode' }})
    

@dataclasses.dataclass
class CreateProductSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateProductRequest:
    security: CreateProductSecurity = dataclasses.field()
    request: Optional[CreateProductRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class CreateProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
