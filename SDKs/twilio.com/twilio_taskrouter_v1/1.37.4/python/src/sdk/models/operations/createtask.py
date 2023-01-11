import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import taskrouter_v1_workspace_task as shared_taskrouter_v1_workspace_task


CREATE_TASK_SERVERS = [
	"https://taskrouter.twilio.com",
]


@dataclasses.dataclass
class CreateTaskPathParams:
    workspace_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'WorkspaceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateTaskCreateTaskRequest:
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    priority: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Priority' }})
    task_channel: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'TaskChannel' }})
    timeout: Optional[int] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Timeout' }})
    workflow_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'WorkflowSid' }})
    

@dataclasses.dataclass
class CreateTaskSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateTaskRequest:
    path_params: CreateTaskPathParams = dataclasses.field()
    security: CreateTaskSecurity = dataclasses.field()
    request: Optional[CreateTaskCreateTaskRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    taskrouter_v1_workspace_task: Optional[shared_taskrouter_v1_workspace_task.TaskrouterV1WorkspaceTask] = dataclasses.field(default=None)
    
