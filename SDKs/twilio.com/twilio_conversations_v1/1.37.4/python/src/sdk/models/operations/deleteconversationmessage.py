import dataclasses
from typing import Optional
from enum import Enum
from ..shared import conversation_message_enum_webhook_enabled_type_enum as shared_conversation_message_enum_webhook_enabled_type_enum
from ..shared import security as shared_security


DELETE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class DeleteConversationMessagePathParams:
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteConversationMessageHeaders:
    x_twilio_webhook_enabled: Optional[shared_conversation_message_enum_webhook_enabled_type_enum.ConversationMessageEnumWebhookEnabledTypeEnum] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Twilio-Webhook-Enabled', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteConversationMessageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteConversationMessageRequest:
    headers: DeleteConversationMessageHeaders = dataclasses.field()
    path_params: DeleteConversationMessagePathParams = dataclasses.field()
    security: DeleteConversationMessageSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteConversationMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
