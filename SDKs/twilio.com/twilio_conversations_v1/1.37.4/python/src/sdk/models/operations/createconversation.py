import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import conversation_enum_webhook_enabled_type_enum as shared_conversation_enum_webhook_enabled_type_enum
from ..shared import conversation_enum_state_enum as shared_conversation_enum_state_enum
from ..shared import security as shared_security
from ..shared import conversations_v1_conversation as shared_conversations_v1_conversation


CREATE_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class CreateConversationHeaders:
    x_twilio_webhook_enabled: Optional[shared_conversation_enum_webhook_enabled_type_enum.ConversationEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateConversationCreateConversationRequest:
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    messaging_service_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MessagingServiceSid' }})
    state: Optional[shared_conversation_enum_state_enum.ConversationEnumStateEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'State' }})
    timers_closed: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Timers.Closed' }})
    timers_inactive: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Timers.Inactive' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class CreateConversationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateConversationRequest:
    headers: CreateConversationHeaders = dataclasses.field()
    security: CreateConversationSecurity = dataclasses.field()
    request: Optional[CreateConversationCreateConversationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateConversationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_conversation: Optional[shared_conversations_v1_conversation.ConversationsV1Conversation] = dataclasses.field(default=None)
    
