import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import conversations_v1_service_service_conversation_service_conversation_participant as shared_conversations_v1_service_service_conversation_service_conversation_participant


FETCH_SERVICE_CONVERSATION_PARTICIPANT_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class FetchServiceConversationParticipantPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchServiceConversationParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchServiceConversationParticipantRequest:
    path_params: FetchServiceConversationParticipantPathParams = dataclasses.field()
    security: FetchServiceConversationParticipantSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchServiceConversationParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    conversations_v1_service_service_conversation_service_conversation_participant: Optional[shared_conversations_v1_service_service_conversation_service_conversation_participant.ConversationsV1ServiceServiceConversationServiceConversationParticipant] = dataclasses.field(default=None)
    
