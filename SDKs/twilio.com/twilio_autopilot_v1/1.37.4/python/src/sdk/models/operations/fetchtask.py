import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_task as shared_autopilot_v1_assistant_task


FETCH_TASK_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class FetchTaskPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchTaskSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchTaskRequest:
    path_params: FetchTaskPathParams = dataclasses.field()
    security: FetchTaskSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchTaskResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_task: Optional[shared_autopilot_v1_assistant_task.AutopilotV1AssistantTask] = dataclasses.field(default=None)
    
