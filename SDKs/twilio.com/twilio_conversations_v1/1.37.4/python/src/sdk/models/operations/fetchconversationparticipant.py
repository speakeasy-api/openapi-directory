import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_conversation_conversation_participant as shared_conversations_v1_conversation_conversation_participant


FETCH_CONVERSATION_PARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class FetchConversationParticipantPathParams:
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchConversationParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchConversationParticipantRequest:
    path_params: FetchConversationParticipantPathParams = dataclasses.field()
    security: FetchConversationParticipantSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchConversationParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_conversation_conversation_participant: Optional[shared_conversations_v1_conversation_conversation_participant.ConversationsV1ConversationConversationParticipant] = dataclasses.field(default=None)
    
