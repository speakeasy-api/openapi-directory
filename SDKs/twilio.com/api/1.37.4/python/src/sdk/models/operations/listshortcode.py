import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_short_code as shared_api_v2010_account_short_code


LIST_SHORT_CODE_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListShortCodePathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListShortCodeQueryParams:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    short_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'ShortCode', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListShortCodeSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListShortCodeListShortCodeResponse:
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    short_codes: Optional[list[shared_api_v2010_account_short_code.APIV2010AccountShortCode]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('short_codes') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListShortCodeRequest:
    path_params: ListShortCodePathParams = dataclasses.field()
    query_params: ListShortCodeQueryParams = dataclasses.field()
    security: ListShortCodeSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListShortCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_short_code_response: Optional[ListShortCodeListShortCodeResponse] = dataclasses.field(default=None)
    
