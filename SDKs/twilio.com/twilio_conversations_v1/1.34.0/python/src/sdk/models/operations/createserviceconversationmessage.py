from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_SERVICE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateServiceConversationMessagePathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateServiceConversationMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared.ServiceConversationMessageEnumWebhookEnabledTypeEnum] = field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled' }})
    

@dataclass
class CreateServiceConversationMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceConversationMessageRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateServiceConversationMessagePathParams = field(default=None)
    headers: CreateServiceConversationMessageHeaders = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateServiceConversationMessageSecurity = field(default=None)
    

@dataclass
class CreateServiceConversationMessageResponses:
    conversations_v1_service_service_conversation_service_conversation_message: Optional[shared.ConversationsV1ServiceServiceConversationServiceConversationMessage] = field(default=None)
    

@dataclass
class CreateServiceConversationMessageResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateServiceConversationMessageResponses]] = field(default=None)
    status_code: int = field(default=None)
    
