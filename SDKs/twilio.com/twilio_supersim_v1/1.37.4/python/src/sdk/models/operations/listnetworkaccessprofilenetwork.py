import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import supersim_v1_network_access_profile_network_access_profile_network as shared_supersim_v1_network_access_profile_network_access_profile_network


LIST_NETWORK_ACCESS_PROFILE_NETWORK_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class ListNetworkAccessProfileNetworkPathParams:
    network_access_profile_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'NetworkAccessProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListNetworkAccessProfileNetworkQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListNetworkAccessProfileNetworkSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse:
    meta: Optional[ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    networks: Optional[list[shared_supersim_v1_network_access_profile_network_access_profile_network.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    

@dataclasses.dataclass
class ListNetworkAccessProfileNetworkRequest:
    path_params: ListNetworkAccessProfileNetworkPathParams = dataclasses.field()
    query_params: ListNetworkAccessProfileNetworkQueryParams = dataclasses.field()
    security: ListNetworkAccessProfileNetworkSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListNetworkAccessProfileNetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_network_access_profile_network_response: Optional[ListNetworkAccessProfileNetworkListNetworkAccessProfileNetworkResponse] = dataclasses.field(default=None)
    
