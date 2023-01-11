import dataclasses
from typing import Optional
from ..shared import sandbox as shared_sandbox
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class PutSandboxRequests:
    sandbox: Optional[shared_sandbox.Sandbox] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    sandbox1: Optional[shared_sandbox.Sandbox] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutSandboxSecurity:
    authorization_code_token: shared_security.SchemeAuthorizationCodeToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PutSandboxRequest:
    security: PutSandboxSecurity = dataclasses.field()
    request: Optional[PutSandboxRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PutSandboxResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
