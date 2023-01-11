import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetAccountLicenseSecurity:
    bearer_auth: shared_security.SchemeBearerAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetAccountLicenseRequest:
    security: GetAccountLicenseSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAccountLicenseResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
