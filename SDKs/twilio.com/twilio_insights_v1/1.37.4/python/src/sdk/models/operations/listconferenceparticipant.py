import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import insights_v1_conference_conference_participant as shared_insights_v1_conference_conference_participant


LIST_CONFERENCE_PARTICIPANT_SERVERS = [
	"https://insights.twilio.com",
]


@dataclasses.dataclass
class ListConferenceParticipantPathParams:
    conference_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListConferenceParticipantQueryParams:
    events: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Events', 'style': 'form', 'explode': True }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Label', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    participant_sid: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ParticipantSid', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListConferenceParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListConferenceParticipantListConferenceParticipantResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListConferenceParticipantListConferenceParticipantResponse:
    meta: Optional[ListConferenceParticipantListConferenceParticipantResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    participants: Optional[list[shared_insights_v1_conference_conference_participant.InsightsV1ConferenceConferenceParticipant]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    

@dataclasses.dataclass
class ListConferenceParticipantRequest:
    path_params: ListConferenceParticipantPathParams = dataclasses.field()
    query_params: ListConferenceParticipantQueryParams = dataclasses.field()
    security: ListConferenceParticipantSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListConferenceParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_conference_participant_response: Optional[ListConferenceParticipantListConferenceParticipantResponse] = dataclasses.field(default=None)
    
