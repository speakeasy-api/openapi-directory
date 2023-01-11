import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_WORKSPACE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class DeleteWorkspacePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteWorkspaceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteWorkspaceRequest:
    path_params: DeleteWorkspacePathParams = dataclasses.field()
    security: DeleteWorkspaceSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteWorkspaceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
