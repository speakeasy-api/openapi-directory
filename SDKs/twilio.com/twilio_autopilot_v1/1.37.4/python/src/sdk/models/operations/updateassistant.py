import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security
from ..shared import autopilot_v1_assistant as shared_autopilot_v1_assistant


UPDATE_ASSISTANT_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclasses.dataclass
class UpdateAssistantPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateAssistantUpdateAssistantRequest:
    callback_events: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackEvents' }})
    callback_url: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    defaults: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Defaults' }})
    development_stage: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DevelopmentStage' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    log_queries: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'LogQueries' }})
    style_sheet: Optional[Any] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'StyleSheet' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class UpdateAssistantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateAssistantRequest:
    path_params: UpdateAssistantPathParams = dataclasses.field()
    security: UpdateAssistantSecurity = dataclasses.field()
    request: Optional[UpdateAssistantUpdateAssistantRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateAssistantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    autopilot_v1_assistant: Optional[shared_autopilot_v1_assistant.AutopilotV1Assistant] = dataclasses.field(default=None)
    
