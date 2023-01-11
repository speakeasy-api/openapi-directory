import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant as shared_autopilot_v1_assistant


CREATE_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class CreateAssistantCreateAssistantRequest:
    callback_events: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackEvents' }})
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    defaults: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Defaults' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    log_queries: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LogQueries' }})
    style_sheet: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StyleSheet' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateAssistantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateAssistantRequest:
    security: CreateAssistantSecurity = dataclasses.field()
    request: Optional[CreateAssistantCreateAssistantRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateAssistantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant: Optional[shared_autopilot_v1_assistant.AutopilotV1Assistant] = dataclasses.field(default=None)
    
