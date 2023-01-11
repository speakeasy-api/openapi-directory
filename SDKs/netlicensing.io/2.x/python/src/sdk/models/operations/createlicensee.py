import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class CreateLicenseeRequestBody:
    active: bool = dataclasses.field(metadata={'form': { 'field_name': 'active' }})
    product_number: str = dataclasses.field(metadata={'form': { 'field_name': 'productNumber' }})
    marked_for_transfer: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'markedForTransfer' }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'name' }})
    number: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'number' }})
    

@dataclasses.dataclass
class CreateLicenseeSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateLicenseeRequest:
    security: CreateLicenseeSecurity = dataclasses.field()
    request: Optional[CreateLicenseeRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class CreateLicenseeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
