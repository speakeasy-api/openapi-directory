import dataclasses
from typing import Optional
from ..shared import sandboxrequest as shared_sandboxrequest
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import errorresponse as shared_errorresponse
from ..shared import sandbox as shared_sandbox


@dataclasses.dataclass
class PostSandboxRequests:
    sandbox_request: Optional[shared_sandboxrequest.SandboxRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    sandbox_request1: Optional[shared_sandboxrequest.SandboxRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostSandboxSecurity:
    authorization_code_token: shared_security.SchemeAuthorizationCodeToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostSandboxRequest:
    security: PostSandboxSecurity = dataclasses.field()
    request: Optional[PostSandboxRequests] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class PostSandboxResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    sandbox: Optional[shared_sandbox.Sandbox] = dataclasses.field(default=None)
    
