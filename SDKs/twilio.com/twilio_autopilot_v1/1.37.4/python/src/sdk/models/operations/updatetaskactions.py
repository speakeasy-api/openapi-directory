import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant_task_task_actions as shared_autopilot_v1_assistant_task_task_actions


UPDATE_TASK_ACTIONS_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class UpdateTaskActionsPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateTaskActionsUpdateTaskActionsRequest:
    actions: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Actions' }})
    

@dataclasses.dataclass
class UpdateTaskActionsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateTaskActionsRequest:
    path_params: UpdateTaskActionsPathParams = dataclasses.field()
    security: UpdateTaskActionsSecurity = dataclasses.field()
    request: Optional[UpdateTaskActionsUpdateTaskActionsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateTaskActionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant_task_task_actions: Optional[shared_autopilot_v1_assistant_task_task_actions.AutopilotV1AssistantTaskTaskActions] = dataclasses.field(default=None)
    
