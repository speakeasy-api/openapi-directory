import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_conversation_conversation_message as shared_conversations_v1_conversation_conversation_message


FETCH_CONVERSATION_MESSAGE_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class FetchConversationMessagePathParams:
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchConversationMessageSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchConversationMessageRequest:
    path_params: FetchConversationMessagePathParams = dataclasses.field()
    security: FetchConversationMessageSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchConversationMessageResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_conversation_conversation_message: Optional[shared_conversations_v1_conversation_conversation_message.ConversationsV1ConversationConversationMessage] = dataclasses.field(default=None)
    
