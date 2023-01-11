import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_conference_participant as shared_api_v2010_account_conference_participant


FETCH_PARTICIPANT_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchParticipantPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    

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
    api_v2010_account_conference_participant: Optional[shared_api_v2010_account_conference_participant.APIV2010AccountConferenceParticipant] = dataclasses.field(default=None)
    
