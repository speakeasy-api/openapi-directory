import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SERVICE_USER_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclasses.dataclass
class DeleteServiceUserConversationPathParams:
    chat_service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    user_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteServiceUserConversationSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteServiceUserConversationRequest:
    path_params: DeleteServiceUserConversationPathParams = dataclasses.field()
    security: DeleteServiceUserConversationSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteServiceUserConversationResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
