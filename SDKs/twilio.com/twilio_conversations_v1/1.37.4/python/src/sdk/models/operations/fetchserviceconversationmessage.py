import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_conversation_service_conversation_message as shared_conversations_v1_service_service_conversation_service_conversation_message


FETCH_SERVICE_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class FetchServiceConversationMessagePathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchServiceConversationMessageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchServiceConversationMessageRequest:
    path_params: FetchServiceConversationMessagePathParams = dataclasses.field()
    security: FetchServiceConversationMessageSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchServiceConversationMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_conversation_service_conversation_message: Optional[shared_conversations_v1_service_service_conversation_service_conversation_message.ConversationsV1ServiceServiceConversationServiceConversationMessage] = dataclasses.field(default=None)
    
