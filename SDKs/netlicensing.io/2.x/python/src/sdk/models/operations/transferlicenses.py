import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class TransferLicensesPathParams:
    licensee_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'licenseeNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TransferLicensesRequestBody:
    source_licensee_number: str = dataclasses.field(metadata={'form': { 'field_name': 'sourceLicenseeNumber' }})
    

@dataclasses.dataclass
class TransferLicensesSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class TransferLicensesRequest:
    path_params: TransferLicensesPathParams = dataclasses.field()
    request: TransferLicensesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: TransferLicensesSecurity = dataclasses.field()
    

@dataclasses.dataclass
class TransferLicensesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
