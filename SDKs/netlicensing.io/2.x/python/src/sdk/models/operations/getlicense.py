import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetLicensePathParams:
    license_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'licenseNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetLicenseSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetLicenseRequest:
    path_params: GetLicensePathParams = dataclasses.field()
    security: GetLicenseSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetLicenseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
