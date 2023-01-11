import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from ..shared import conversation_message_enum_webhook_enabled_type_enum as shared_conversation_message_enum_webhook_enabled_type_enum
from ..shared import security as shared_security
from ..shared import conversations_v1_conversation_conversation_message as shared_conversations_v1_conversation_conversation_message


CREATE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class CreateConversationMessagePathParams:
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateConversationMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared_conversation_message_enum_webhook_enabled_type_enum.ConversationMessageEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateConversationMessageCreateConversationMessageRequest:
    attributes: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Attributes' }})
    author: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Author' }})
    body: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Body' }})
    date_created: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateCreated' }})
    date_updated: Optional[datetime] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'DateUpdated' }})
    media_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MediaSid' }})
    

@dataclasses.dataclass
class CreateConversationMessageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateConversationMessageRequest:
    headers: CreateConversationMessageHeaders = dataclasses.field()
    path_params: CreateConversationMessagePathParams = dataclasses.field()
    security: CreateConversationMessageSecurity = dataclasses.field()
    request: Optional[CreateConversationMessageCreateConversationMessageRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateConversationMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_conversation_conversation_message: Optional[shared_conversations_v1_conversation_conversation_message.ConversationsV1ConversationConversationMessage] = dataclasses.field(default=None)
    
