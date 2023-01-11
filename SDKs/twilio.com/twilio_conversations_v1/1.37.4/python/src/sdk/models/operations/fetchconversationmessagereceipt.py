import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_conversation_conversation_message_conversation_message_receipt as shared_conversations_v1_conversation_conversation_message_conversation_message_receipt


FETCH_CONVERSATION_MESSAGE_RECEIPT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class FetchConversationMessageReceiptPathParams:
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    message_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MessageSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchConversationMessageReceiptSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchConversationMessageReceiptRequest:
    path_params: FetchConversationMessageReceiptPathParams = dataclasses.field()
    security: FetchConversationMessageReceiptSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchConversationMessageReceiptResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_conversation_conversation_message_conversation_message_receipt: Optional[shared_conversations_v1_conversation_conversation_message_conversation_message_receipt.ConversationsV1ConversationConversationMessageConversationMessageReceipt] = dataclasses.field(default=None)
    
