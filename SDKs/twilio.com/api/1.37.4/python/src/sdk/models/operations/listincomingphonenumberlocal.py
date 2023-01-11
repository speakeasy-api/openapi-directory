import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_incoming_phone_number_incoming_phone_number_local as shared_api_v2010_account_incoming_phone_number_incoming_phone_number_local


LIST_INCOMING_PHONE_NUMBER_LOCAL_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListIncomingPhoneNumberLocalPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListIncomingPhoneNumberLocalQueryParams:
    beta: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Beta', 'style': 'form', 'explode': True }})
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    origin: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Origin', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PhoneNumber', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListIncomingPhoneNumberLocalSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse:
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    incoming_phone_numbers: Optional[list[shared_api_v2010_account_incoming_phone_number_incoming_phone_number_local.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('incoming_phone_numbers') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListIncomingPhoneNumberLocalRequest:
    path_params: ListIncomingPhoneNumberLocalPathParams = dataclasses.field()
    query_params: ListIncomingPhoneNumberLocalQueryParams = dataclasses.field()
    security: ListIncomingPhoneNumberLocalSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListIncomingPhoneNumberLocalResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_incoming_phone_number_local_response: Optional[ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse] = dataclasses.field(default=None)
    
