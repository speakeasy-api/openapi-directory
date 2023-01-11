import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import service_conversation_message_enum_webhook_enabled_type_enum as shared_service_conversation_message_enum_webhook_enabled_type_enum
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_conversation_service_conversation_message as shared_conversations_v1_service_service_conversation_service_conversation_message


UPDATE_SERVICE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class UpdateServiceConversationMessagePathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceConversationMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared_service_conversation_message_enum_webhook_enabled_type_enum.ServiceConversationMessageEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateServiceConversationMessageUpdateServiceConversationMessageRequest:
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    author: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Author' }})
    body: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Body' }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    

@dataclasses.dataclass
class UpdateServiceConversationMessageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateServiceConversationMessageRequest:
    headers: UpdateServiceConversationMessageHeaders = dataclasses.field()
    path_params: UpdateServiceConversationMessagePathParams = dataclasses.field()
    security: UpdateServiceConversationMessageSecurity = dataclasses.field()
    request: Optional[UpdateServiceConversationMessageUpdateServiceConversationMessageRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateServiceConversationMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_conversation_service_conversation_message: Optional[shared_conversations_v1_service_service_conversation_service_conversation_message.ConversationsV1ServiceServiceConversationServiceConversationMessage] = dataclasses.field(default=None)
    
