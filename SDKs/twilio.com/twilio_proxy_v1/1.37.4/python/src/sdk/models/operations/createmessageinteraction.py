import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import proxy_v1_service_session_participant_message_interaction as shared_proxy_v1_service_session_participant_message_interaction


CREATE_MESSAGE_INTERACTION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclasses.dataclass
class CreateMessageInteractionPathParams:
    participant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    session_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SessionSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateMessageInteractionCreateMessageInteractionRequest:
    body: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'Body' }})
    media_url: Optional[list[str]] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'MediaUrl' }})
    

@dataclasses.dataclass
class CreateMessageInteractionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateMessageInteractionRequest:
    path_params: CreateMessageInteractionPathParams = dataclasses.field()
    security: CreateMessageInteractionSecurity = dataclasses.field()
    request: Optional[CreateMessageInteractionCreateMessageInteractionRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateMessageInteractionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_v1_service_session_participant_message_interaction: Optional[shared_proxy_v1_service_session_participant_message_interaction.ProxyV1ServiceSessionParticipantMessageInteraction] = dataclasses.field(default=None)
    
