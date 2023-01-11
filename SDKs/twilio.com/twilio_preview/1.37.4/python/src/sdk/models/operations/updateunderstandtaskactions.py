import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_task_task_actions as shared_preview_understand_assistant_task_task_actions


UPDATE_UNDERSTAND_TASK_ACTIONS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateUnderstandTaskActionsPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    task_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TaskSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest:
    actions: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Actions' }})
    

@dataclasses.dataclass
class UpdateUnderstandTaskActionsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateUnderstandTaskActionsRequest:
    path_params: UpdateUnderstandTaskActionsPathParams = dataclasses.field()
    security: UpdateUnderstandTaskActionsSecurity = dataclasses.field()
    request: Optional[UpdateUnderstandTaskActionsUpdateUnderstandTaskActionsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateUnderstandTaskActionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_task_task_actions: Optional[shared_preview_understand_assistant_task_task_actions.PreviewUnderstandAssistantTaskTaskActions] = dataclasses.field(default=None)
    
