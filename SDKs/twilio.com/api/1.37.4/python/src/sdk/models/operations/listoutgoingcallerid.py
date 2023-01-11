import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_outgoing_caller_id as shared_api_v2010_account_outgoing_caller_id


LIST_OUTGOING_CALLER_ID_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListOutgoingCallerIDPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListOutgoingCallerIDQueryParams:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PhoneNumber', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListOutgoingCallerIDSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListOutgoingCallerIDListOutgoingCallerIDResponse:
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    outgoing_caller_ids: Optional[list[shared_api_v2010_account_outgoing_caller_id.APIV2010AccountOutgoingCallerID]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoing_caller_ids') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListOutgoingCallerIDRequest:
    path_params: ListOutgoingCallerIDPathParams = dataclasses.field()
    query_params: ListOutgoingCallerIDQueryParams = dataclasses.field()
    security: ListOutgoingCallerIDSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListOutgoingCallerIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_outgoing_caller_id_response: Optional[ListOutgoingCallerIDListOutgoingCallerIDResponse] = dataclasses.field(default=None)
    
