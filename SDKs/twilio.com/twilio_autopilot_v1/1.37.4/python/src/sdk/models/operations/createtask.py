import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_task as shared_autopilot_v1_assistant_task


CREATE_TASK_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class CreateTaskPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateTaskCreateTaskRequest:
    unique_name: str = dataclasses.field(metadata={'form': { 'field_name': 'UniqueName' }})
    actions: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Actions' }})
    actions_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ActionsUrl' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

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
    autopilot_v1_assistant_task: Optional[shared_autopilot_v1_assistant_task.AutopilotV1AssistantTask] = dataclasses.field(default=None)
    
