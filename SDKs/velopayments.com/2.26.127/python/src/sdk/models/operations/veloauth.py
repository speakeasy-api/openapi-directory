import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import authresponse as shared_authresponse


@dataclasses.dataclass
class VeloAuthQueryParams:
    grant_type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'grant_type', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class VeloAuthSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class VeloAuthRequest:
    query_params: VeloAuthQueryParams = dataclasses.field()
    security: VeloAuthSecurity = dataclasses.field()
    

@dataclasses.dataclass
class VeloAuthResponse:
    content_type: str = dataclasses.field()
    headers: dict[str, list[str]] = dataclasses.field()
    status_code: int = dataclasses.field()
    auth_response: Optional[shared_authresponse.AuthResponse] = dataclasses.field(default=None)
    
