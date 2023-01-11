import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import api_v2010_account_sip_sip_ip_access_control_list as shared_api_v2010_account_sip_sip_ip_access_control_list


LIST_SIP_IP_ACCESS_CONTROL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class ListSipIPAccessControlListPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSipIPAccessControlListQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSipIPAccessControlListSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListSipIPAccessControlListListSipIPAccessControlListResponse:
    end: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    first_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_uri') }})
    ip_access_control_lists: Optional[list[shared_api_v2010_account_sip_sip_ip_access_control_list.APIV2010AccountSipSipIPAccessControlList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_access_control_lists') }})
    next_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_uri') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_uri') }})
    start: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclasses.dataclass
class ListSipIPAccessControlListRequest:
    path_params: ListSipIPAccessControlListPathParams = dataclasses.field()
    query_params: ListSipIPAccessControlListQueryParams = dataclasses.field()
    security: ListSipIPAccessControlListSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListSipIPAccessControlListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_sip_ip_access_control_list_response: Optional[ListSipIPAccessControlListListSipIPAccessControlListResponse] = dataclasses.field(default=None)
    
