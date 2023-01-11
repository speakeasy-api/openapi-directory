import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import service_conversation_message_enum_order_type_enum as shared_service_conversation_message_enum_order_type_enum
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_conversation_service_conversation_message as shared_conversations_v1_service_service_conversation_service_conversation_message


LIST_SERVICE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class ListServiceConversationMessagePathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListServiceConversationMessageQueryParams:
    order: Optional[shared_service_conversation_message_enum_order_type_enum.ServiceConversationMessageEnumOrderTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Order', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListServiceConversationMessageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListServiceConversationMessageListServiceConversationMessageResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListServiceConversationMessageListServiceConversationMessageResponse:
    messages: Optional[list[shared_conversations_v1_service_service_conversation_service_conversation_message.ConversationsV1ServiceServiceConversationServiceConversationMessage]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    meta: Optional[ListServiceConversationMessageListServiceConversationMessageResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListServiceConversationMessageRequest:
    path_params: ListServiceConversationMessagePathParams = dataclasses.field()
    query_params: ListServiceConversationMessageQueryParams = dataclasses.field()
    security: ListServiceConversationMessageSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListServiceConversationMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_service_conversation_message_response: Optional[ListServiceConversationMessageListServiceConversationMessageResponse] = dataclasses.field(default=None)
    
