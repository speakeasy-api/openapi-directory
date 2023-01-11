import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdateProductPathParams:
    product_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'productNumber', 'style': 'simple', 'explode': False }})
    
class UpdateProductRequestBodyVatModeEnum(str, Enum):
    GROSS = "GROSS"
    NET = "NET"


@dataclasses.dataclass
class UpdateProductRequestBody:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'active' }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'description' }})
    licensee_auto_create: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'licenseeAutoCreate' }})
    licensing_info: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'licensingInfo' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'name' }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'number' }})
    vat_mode: Optional[UpdateProductRequestBodyVatModeEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'vatMode' }})
    version: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'version' }})
    

@dataclasses.dataclass
class UpdateProductSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateProductRequest:
    path_params: UpdateProductPathParams = dataclasses.field()
    security: UpdateProductSecurity = dataclasses.field()
    request: Optional[UpdateProductRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class UpdateProductResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
