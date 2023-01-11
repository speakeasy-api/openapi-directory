import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import service_conversation_enum_webhook_enabled_type_enum as shared_service_conversation_enum_webhook_enabled_type_enum
from ..shared import service_conversation_enum_state_enum as shared_service_conversation_enum_state_enum
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_conversation as shared_conversations_v1_service_service_conversation


UPDATE_SERVICE_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class UpdateServiceConversationPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceConversationHeaders:
    x_twilio_webhook_enabled: Optional[shared_service_conversation_enum_webhook_enabled_type_enum.ServiceConversationEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceConversationUpdateServiceConversationRequest:
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    messaging_service_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MessagingServiceSid' }})
    state: Optional[shared_service_conversation_enum_state_enum.ServiceConversationEnumStateEnum] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'State' }})
    timers_closed: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Timers.Closed' }})
    timers_inactive: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Timers.Inactive' }})
    unique_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclasses.dataclass
class UpdateServiceConversationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateServiceConversationRequest:
    headers: UpdateServiceConversationHeaders = dataclasses.field()
    path_params: UpdateServiceConversationPathParams = dataclasses.field()
    security: UpdateServiceConversationSecurity = dataclasses.field()
    request: Optional[UpdateServiceConversationUpdateServiceConversationRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateServiceConversationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_conversation: Optional[shared_conversations_v1_service_service_conversation.ConversationsV1ServiceServiceConversation] = dataclasses.field(default=None)
    
