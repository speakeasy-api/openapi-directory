import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_conversation_service_conversation_message_service_conversation_message_receipt as shared_conversations_v1_service_service_conversation_service_conversation_message_service_conversation_message_receipt


LIST_SERVICE_CONVERSATION_MESSAGE_RECEIPT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class ListServiceConversationMessageReceiptPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    message_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'MessageSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListServiceConversationMessageReceiptQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListServiceConversationMessageReceiptSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse:
    delivery_receipts: Optional[list[shared_conversations_v1_service_service_conversation_service_conversation_message_service_conversation_message_receipt.ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery_receipts') }})
    meta: Optional[ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListServiceConversationMessageReceiptRequest:
    path_params: ListServiceConversationMessageReceiptPathParams = dataclasses.field()
    query_params: ListServiceConversationMessageReceiptQueryParams = dataclasses.field()
    security: ListServiceConversationMessageReceiptSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListServiceConversationMessageReceiptResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_service_conversation_message_receipt_response: Optional[ListServiceConversationMessageReceiptListServiceConversationMessageReceiptResponse] = dataclasses.field(default=None)
    
