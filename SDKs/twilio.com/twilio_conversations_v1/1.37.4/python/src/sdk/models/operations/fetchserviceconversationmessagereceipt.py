import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_conversation_service_conversation_message_service_conversation_message_receipt as shared_conversations_v1_service_service_conversation_service_conversation_message_service_conversation_message_receipt


FETCH_SERVICE_CONVERSATION_MESSAGE_RECEIPT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class FetchServiceConversationMessageReceiptPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    message_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MessageSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchServiceConversationMessageReceiptSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchServiceConversationMessageReceiptRequest:
    path_params: FetchServiceConversationMessageReceiptPathParams = dataclasses.field()
    security: FetchServiceConversationMessageReceiptSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchServiceConversationMessageReceiptResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_conversation_service_conversation_message_service_conversation_message_receipt: Optional[shared_conversations_v1_service_service_conversation_service_conversation_message_service_conversation_message_receipt.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt] = dataclasses.field(default=None)
    
