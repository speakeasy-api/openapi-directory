from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
UPDATE_TASK_ACTIONS_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class UpdateTaskActionsPathParams:
    assistant_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTaskActionsUpdateTaskActionsRequest:
    actions: Optional[Any] = field(default=None, metadata={'form': { 'field_name': 'Actions' }})
    

@dataclass
class UpdateTaskActionsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTaskActionsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateTaskActionsPathParams = field(default=None)
    request: Optional[UpdateTaskActionsUpdateTaskActionsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateTaskActionsSecurity = field(default=None)
    

@dataclass
class UpdateTaskActionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    autopilot_v1_assistant_task_task_actions: Optional[shared.AutopilotV1AssistantTaskTaskActions] = field(default=None)
    
