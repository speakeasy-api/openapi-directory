import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import authresult as shared_authresult


@dataclasses.dataclass
class GetAuthSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetAuthRequest:
    security: GetAuthSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetAuthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    auth_result: Optional[shared_authresult.AuthResult] = dataclasses.field(default=None)
    
