import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_task_field as shared_autopilot_v1_assistant_task_field


CREATE_FIELD_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class CreateFieldPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateFieldCreateFieldRequest:
    field_type: str = dataclasses.field(metadata={'form': { 'field_name': 'FieldType' }})
    unique_name: str = dataclasses.field(metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateFieldSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateFieldRequest:
    path_params: CreateFieldPathParams = dataclasses.field()
    security: CreateFieldSecurity = dataclasses.field()
    request: Optional[CreateFieldCreateFieldRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateFieldResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_task_field: Optional[shared_autopilot_v1_assistant_task_field.AutopilotV1AssistantTaskField] = dataclasses.field(default=None)
    
