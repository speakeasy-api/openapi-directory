import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_user_user_conversation as shared_conversations_v1_user_user_conversation


FETCH_USER_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class FetchUserConversationPathParams:
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    user_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchUserConversationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchUserConversationRequest:
    path_params: FetchUserConversationPathParams = dataclasses.field()
    security: FetchUserConversationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchUserConversationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_user_user_conversation: Optional[shared_conversations_v1_user_user_conversation.ConversationsV1UserUserConversation] = dataclasses.field(default=None)
    
