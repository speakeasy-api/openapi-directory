import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_TASK_QUEUE_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class DeleteTaskQueuePathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteTaskQueueSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteTaskQueueRequest:
    path_params: DeleteTaskQueuePathParams = dataclasses.field()
    security: DeleteTaskQueueSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteTaskQueueResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
