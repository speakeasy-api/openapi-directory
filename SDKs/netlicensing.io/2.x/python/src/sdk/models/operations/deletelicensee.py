import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class DeleteLicenseePathParams:
    licensee_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'licenseeNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteLicenseeQueryParams:
    force_cascade: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'forceCascade', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class DeleteLicenseeSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteLicenseeRequest:
    path_params: DeleteLicenseePathParams = dataclasses.field()
    query_params: DeleteLicenseeQueryParams = dataclasses.field()
    security: DeleteLicenseeSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteLicenseeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
