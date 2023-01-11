import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import account_enum_status_enum as shared_account_enum_status_enum
from ..shared import security as shared_security
from ..shared import api_v2010_account as shared_api_v2010_account


LIST_ACCOUNT_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListAccountQueryParams:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'FriendlyName', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    status: Optional[shared_account_enum_status_enum.AccountEnumStatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Status', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListAccountSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListAccountListAccountResponse:
    accounts: Optional[list[shared_api_v2010_account.APIV2010Account]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListAccountRequest:
    query_params: ListAccountQueryParams = dataclasses.field()
    security: ListAccountSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_account_response: Optional[ListAccountListAccountResponse] = dataclasses.field(default=None)
    
