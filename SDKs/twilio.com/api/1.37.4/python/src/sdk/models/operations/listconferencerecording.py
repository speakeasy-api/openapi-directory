import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_conference_conference_recording as shared_api_v2010_account_conference_conference_recording


LIST_CONFERENCE_RECORDING_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListConferenceRecordingPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    conference_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ConferenceSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListConferenceRecordingQueryParams:
    date_created: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreated', 'style': 'form', 'explode': True }})
    date_created_less_than_: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreated<', 'style': 'form', 'explode': True }})
    date_created_greater_than_: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreated>', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListConferenceRecordingSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListConferenceRecordingListConferenceRecordingResponse:
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    recordings: Optional[list[shared_api_v2010_account_conference_conference_recording.APIV2010AccountConferenceConferenceRecording]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recordings') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListConferenceRecordingRequest:
    path_params: ListConferenceRecordingPathParams = dataclasses.field()
    query_params: ListConferenceRecordingQueryParams = dataclasses.field()
    security: ListConferenceRecordingSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListConferenceRecordingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_conference_recording_response: Optional[ListConferenceRecordingListConferenceRecordingResponse] = dataclasses.field(default=None)
    
