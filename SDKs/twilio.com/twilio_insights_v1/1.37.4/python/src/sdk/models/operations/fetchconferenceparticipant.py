import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import insights_v1_conference_conference_participant as shared_insights_v1_conference_conference_participant


FETCH_CONFERENCE_PARTICIPANT_SERVERS = [
	"https://insights.twilio.com",
]


@dataclasses.dataclass
class FetchConferenceParticipantPathParams:
    conference_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    participant_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ParticipantSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchConferenceParticipantQueryParams:
    events: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Events', 'style': 'form', 'explode': True }})
    metrics: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Metrics', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class FetchConferenceParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchConferenceParticipantRequest:
    path_params: FetchConferenceParticipantPathParams = dataclasses.field()
    query_params: FetchConferenceParticipantQueryParams = dataclasses.field()
    security: FetchConferenceParticipantSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchConferenceParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insights_v1_conference_conference_participant: Optional[shared_insights_v1_conference_conference_participant.InsightsV1ConferenceConferenceParticipant] = dataclasses.field(default=None)
    
