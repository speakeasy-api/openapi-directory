import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_worker as shared_taskrouter_v1_workspace_worker


CREATE_WORKER_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class CreateWorkerPathParams:
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateWorkerCreateWorkerRequest:
    friendly_name: str = dataclasses.field(metadata={'form': { 'field_name': 'FriendlyName' }})
    activity_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ActivitySid' }})
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    

@dataclasses.dataclass
class CreateWorkerSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateWorkerRequest:
    path_params: CreateWorkerPathParams = dataclasses.field()
    security: CreateWorkerSecurity = dataclasses.field()
    request: Optional[CreateWorkerCreateWorkerRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateWorkerResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_worker: Optional[shared_taskrouter_v1_workspace_worker.TaskrouterV1WorkspaceWorker] = dataclasses.field(default=None)
    
