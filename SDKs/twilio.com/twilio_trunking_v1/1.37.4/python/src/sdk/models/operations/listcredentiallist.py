import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import trunking_v1_trunk_credential_list as shared_trunking_v1_trunk_credential_list


LIST_CREDENTIAL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclasses.dataclass
class ListCredentialListPathParams:
    trunk_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListCredentialListQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListCredentialListSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListCredentialListListCredentialListResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListCredentialListListCredentialListResponse:
    credential_lists: Optional[list[shared_trunking_v1_trunk_credential_list.TrunkingV1TrunkCredentialList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('credential_lists') }})
    meta: Optional[ListCredentialListListCredentialListResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListCredentialListRequest:
    path_params: ListCredentialListPathParams = dataclasses.field()
    query_params: ListCredentialListQueryParams = dataclasses.field()
    security: ListCredentialListSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListCredentialListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_credential_list_response: Optional[ListCredentialListListCredentialListResponse] = dataclasses.field(default=None)
    
