import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import proxy_v1_service_session_participant_message_interaction as shared_proxy_v1_service_session_participant_message_interaction


FETCH_MESSAGE_INTERACTION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclasses.dataclass
class FetchMessageInteractionPathParams:
    participant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    session_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SessionSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchMessageInteractionSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchMessageInteractionRequest:
    path_params: FetchMessageInteractionPathParams = dataclasses.field()
    security: FetchMessageInteractionSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchMessageInteractionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_v1_service_session_participant_message_interaction: Optional[shared_proxy_v1_service_session_participant_message_interaction.ProxyV1ServiceSessionParticipantMessageInteraction] = dataclasses.field(default=None)
    
