import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_conference_participant as shared_api_v2010_account_conference_participant


LIST_PARTICIPANT_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListParticipantPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListParticipantQueryParams:
    coaching: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Coaching', 'style': 'form', 'explode': True }})
    hold: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Hold', 'style': 'form', 'explode': True }})
    muted: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Muted', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListParticipantSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListParticipantListParticipantResponse:
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    participants: Optional[list[shared_api_v2010_account_conference_participant.APIV2010AccountConferenceParticipant]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('participants') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListParticipantRequest:
    path_params: ListParticipantPathParams = dataclasses.field()
    query_params: ListParticipantQueryParams = dataclasses.field()
    security: ListParticipantSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListParticipantResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_participant_response: Optional[ListParticipantListParticipantResponse] = dataclasses.field(default=None)
    
