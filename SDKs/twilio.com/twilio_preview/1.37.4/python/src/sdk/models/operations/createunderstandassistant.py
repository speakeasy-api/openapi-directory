import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import preview_understand_assistant as shared_preview_understand_assistant


CREATE_UNDERSTAND_ASSISTANT_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class CreateUnderstandAssistantCreateUnderstandAssistantRequest:
    callback_events: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackEvents' }})
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    fallback_actions: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FallbackActions' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    initiation_actions: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'InitiationActions' }})
    log_queries: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LogQueries' }})
    style_sheet: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StyleSheet' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateUnderstandAssistantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateUnderstandAssistantRequest:
    security: CreateUnderstandAssistantSecurity = dataclasses.field()
    request: Optional[CreateUnderstandAssistantCreateUnderstandAssistantRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateUnderstandAssistantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_understand_assistant: Optional[shared_preview_understand_assistant.PreviewUnderstandAssistant] = dataclasses.field(default=None)
    
