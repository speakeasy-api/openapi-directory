import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_conversation as shared_conversations_v1_conversation


FETCH_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class FetchConversationPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchConversationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchConversationRequest:
    path_params: FetchConversationPathParams = dataclasses.field()
    security: FetchConversationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchConversationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_conversation: Optional[shared_conversations_v1_conversation.ConversationsV1Conversation] = dataclasses.field(default=None)
    
