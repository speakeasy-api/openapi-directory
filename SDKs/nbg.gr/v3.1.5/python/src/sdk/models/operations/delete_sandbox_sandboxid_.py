import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import errorresponse as shared_errorresponse


@dataclasses.dataclass
class DeleteSandboxSandboxIDPathParams:
    sandbox_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'sandboxId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSandboxSandboxIDSecurity:
    authorization_code_token: shared_security.SchemeAuthorizationCodeToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared_security.SchemeClientID = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class DeleteSandboxSandboxIDRequest:
    path_params: DeleteSandboxSandboxIDPathParams = dataclasses.field()
    security: DeleteSandboxSandboxIDSecurity = dataclasses.field()
    

@dataclasses.dataclass
class DeleteSandboxSandboxIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response: Optional[shared_errorresponse.ErrorResponse] = dataclasses.field(default=None)
    
