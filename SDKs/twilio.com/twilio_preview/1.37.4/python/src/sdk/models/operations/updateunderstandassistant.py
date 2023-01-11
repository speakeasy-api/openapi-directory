import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant as shared_preview_understand_assistant


UPDATE_UNDERSTAND_ASSISTANT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class UpdateUnderstandAssistantPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateUnderstandAssistantUpdateUnderstandAssistantRequest:
    callback_events: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackEvents' }})
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    fallback_actions: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FallbackActions' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    initiation_actions: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'InitiationActions' }})
    log_queries: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LogQueries' }})
    style_sheet: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StyleSheet' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class UpdateUnderstandAssistantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateUnderstandAssistantRequest:
    path_params: UpdateUnderstandAssistantPathParams = dataclasses.field()
    security: UpdateUnderstandAssistantSecurity = dataclasses.field()
    request: Optional[UpdateUnderstandAssistantUpdateUnderstandAssistantRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateUnderstandAssistantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant: Optional[shared_preview_understand_assistant.PreviewUnderstandAssistant] = dataclasses.field(default=None)
    
