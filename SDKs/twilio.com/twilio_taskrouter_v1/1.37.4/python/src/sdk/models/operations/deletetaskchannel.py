import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_TASK_CHANNEL_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class DeleteTaskChannelPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTaskChannelSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteTaskChannelRequest:
    path_params: DeleteTaskChannelPathParams = dataclasses.field()
    security: DeleteTaskChannelSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTaskChannelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
