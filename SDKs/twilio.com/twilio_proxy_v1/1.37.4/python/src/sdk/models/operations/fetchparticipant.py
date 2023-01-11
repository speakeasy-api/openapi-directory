import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import proxy_v1_service_session_participant as shared_proxy_v1_service_session_participant


FETCH_PARTICIPANT_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclasses.dataclass
class FetchParticipantPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    session_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SessionSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchParticipantRequest:
    path_params: FetchParticipantPathParams = dataclasses.field()
    security: FetchParticipantSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_v1_service_session_participant: Optional[shared_proxy_v1_service_session_participant.ProxyV1ServiceSessionParticipant] = dataclasses.field(default=None)
    
