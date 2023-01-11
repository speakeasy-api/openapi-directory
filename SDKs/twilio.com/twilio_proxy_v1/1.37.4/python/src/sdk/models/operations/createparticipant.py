import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import proxy_v1_service_session_participant as shared_proxy_v1_service_session_participant


CREATE_PARTICIPANT_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclasses.dataclass
class CreateParticipantPathParams:
    service_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    session_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SessionSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateParticipantCreateParticipantRequest:
    identifier: str = dataclasses.field(metadata={'form': { 'field_name': 'Identifier' }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    proxy_identifier: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ProxyIdentifier' }})
    proxy_identifier_sid: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'ProxyIdentifierSid' }})
    

@dataclasses.dataclass
class CreateParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateParticipantRequest:
    path_params: CreateParticipantPathParams = dataclasses.field()
    security: CreateParticipantSecurity = dataclasses.field()
    request: Optional[CreateParticipantCreateParticipantRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    proxy_v1_service_session_participant: Optional[shared_proxy_v1_service_session_participant.ProxyV1ServiceSessionParticipant] = dataclasses.field(default=None)
    
