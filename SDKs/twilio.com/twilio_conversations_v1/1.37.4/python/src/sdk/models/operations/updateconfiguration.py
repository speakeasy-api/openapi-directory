import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_configuration as shared_conversations_v1_configuration


UPDATE_CONFIGURATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class UpdateConfigurationUpdateConfigurationRequest:
    default_chat_service_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultChatServiceSid' }})
    default_closed_timer: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultClosedTimer' }})
    default_inactive_timer: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultInactiveTimer' }})
    default_messaging_service_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DefaultMessagingServiceSid' }})
    

@dataclasses.dataclass
class UpdateConfigurationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateConfigurationRequest:
    security: UpdateConfigurationSecurity = dataclasses.field()
    request: Optional[UpdateConfigurationUpdateConfigurationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateConfigurationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_configuration: Optional[shared_conversations_v1_configuration.ConversationsV1Configuration] = dataclasses.field(default=None)
    
