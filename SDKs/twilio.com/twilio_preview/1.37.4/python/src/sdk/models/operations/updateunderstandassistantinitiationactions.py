import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_assistant_initiation_actions as shared_preview_understand_assistant_assistant_initiation_actions


UPDATE_UNDERSTAND_ASSISTANT_INITIATION_ACTIONS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateUnderstandAssistantInitiationActionsPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest:
    initiation_actions: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'InitiationActions' }})
    

@dataclasses.dataclass
class UpdateUnderstandAssistantInitiationActionsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateUnderstandAssistantInitiationActionsRequest:
    path_params: UpdateUnderstandAssistantInitiationActionsPathParams = dataclasses.field()
    security: UpdateUnderstandAssistantInitiationActionsSecurity = dataclasses.field()
    request: Optional[UpdateUnderstandAssistantInitiationActionsUpdateUnderstandAssistantInitiationActionsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateUnderstandAssistantInitiationActionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_assistant_initiation_actions: Optional[shared_preview_understand_assistant_assistant_initiation_actions.PreviewUnderstandAssistantAssistantInitiationActions] = dataclasses.field(default=None)
    
