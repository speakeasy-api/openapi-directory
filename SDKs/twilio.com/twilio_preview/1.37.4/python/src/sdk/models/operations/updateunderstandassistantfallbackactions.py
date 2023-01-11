import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant_assistant_fallback_actions as shared_preview_understand_assistant_assistant_fallback_actions


UPDATE_UNDERSTAND_ASSISTANT_FALLBACK_ACTIONS_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateUnderstandAssistantFallbackActionsPathParams:
    assistant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest:
    fallback_actions: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FallbackActions' }})
    

@dataclasses.dataclass
class UpdateUnderstandAssistantFallbackActionsSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateUnderstandAssistantFallbackActionsRequest:
    path_params: UpdateUnderstandAssistantFallbackActionsPathParams = dataclasses.field()
    security: UpdateUnderstandAssistantFallbackActionsSecurity = dataclasses.field()
    request: Optional[UpdateUnderstandAssistantFallbackActionsUpdateUnderstandAssistantFallbackActionsRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateUnderstandAssistantFallbackActionsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant_assistant_fallback_actions: Optional[shared_preview_understand_assistant_assistant_fallback_actions.PreviewUnderstandAssistantAssistantFallbackActions] = dataclasses.field(default=None)
    
