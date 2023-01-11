import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_sip_sip_credential_list as shared_api_v2010_account_sip_sip_credential_list


LIST_SIP_CREDENTIAL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListSipCredentialListPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSipCredentialListQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSipCredentialListSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListSipCredentialListListSipCredentialListResponse:
    credential_lists: Optional[list[shared_api_v2010_account_sip_sip_credential_list.APIV2010AccountSipSipCredentialList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential_lists') }})
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListSipCredentialListRequest:
    path_params: ListSipCredentialListPathParams = dataclasses.field()
    query_params: ListSipCredentialListQueryParams = dataclasses.field()
    security: ListSipCredentialListSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListSipCredentialListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_sip_credential_list_response: Optional[ListSipCredentialListListSipCredentialListResponse] = dataclasses.field(default=None)
    
