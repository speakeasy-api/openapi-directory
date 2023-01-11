import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import conference_enum_status_enum as shared_conference_enum_status_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account_conference as shared_api_v2010_account_conference


LIST_CONFERENCE_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListConferencePathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListConferenceQueryParams:
    date_created: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreated', 'style': 'form', 'explode': True }})
    date_created_less_than_: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreated<', 'style': 'form', 'explode': True }})
    date_created_greater_than_: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateCreated>', 'style': 'form', 'explode': True }})
    date_updated: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateUpdated', 'style': 'form', 'explode': True }})
    date_updated_less_than_: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateUpdated<', 'style': 'form', 'explode': True }})
    date_updated_greater_than_: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'DateUpdated>', 'style': 'form', 'explode': True }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared_conference_enum_status_enum.ConferenceEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListConferenceSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListConferenceListConferenceResponse:
    conferences: Optional[list[shared_api_v2010_account_conference.APIV2010AccountConference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conferences') }})
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListConferenceRequest:
    path_params: ListConferencePathParams = dataclasses.field()
    query_params: ListConferenceQueryParams = dataclasses.field()
    security: ListConferenceSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListConferenceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_conference_response: Optional[ListConferenceListConferenceResponse] = dataclasses.field(default=None)
    
