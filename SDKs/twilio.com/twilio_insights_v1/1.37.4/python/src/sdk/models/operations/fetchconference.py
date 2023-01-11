import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import insights_v1_conference as shared_insights_v1_conference


FETCH_CONFERENCE_SERVERS = [
	"https://insights.twilio.com",
]


@dataclasses.dataclass
class FetchConferencePathParams:
    conference_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchConferenceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchConferenceRequest:
    path_params: FetchConferencePathParams = dataclasses.field()
    security: FetchConferenceSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchConferenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    insights_v1_conference: Optional[shared_insights_v1_conference.InsightsV1Conference] = dataclasses.field(default=None)
    
