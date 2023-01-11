import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_task_field as shared_autopilot_v1_assistant_task_field


FETCH_FIELD_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class FetchFieldPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    task_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchFieldSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchFieldRequest:
    path_params: FetchFieldPathParams = dataclasses.field()
    security: FetchFieldSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchFieldResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_task_field: Optional[shared_autopilot_v1_assistant_task_field.AutopilotV1AssistantTaskField] = dataclasses.field(default=None)
    
