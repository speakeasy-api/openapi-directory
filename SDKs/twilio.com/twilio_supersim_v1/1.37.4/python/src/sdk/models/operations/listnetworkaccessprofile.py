import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import supersim_v1_network_access_profile as shared_supersim_v1_network_access_profile


LIST_NETWORK_ACCESS_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class ListNetworkAccessProfileQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListNetworkAccessProfileSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListNetworkAccessProfileListNetworkAccessProfileResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListNetworkAccessProfileListNetworkAccessProfileResponse:
    meta: Optional[ListNetworkAccessProfileListNetworkAccessProfileResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    network_access_profiles: Optional[list[shared_supersim_v1_network_access_profile.SupersimV1NetworkAccessProfile]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_access_profiles') }})
    

@dataclasses.dataclass
class ListNetworkAccessProfileRequest:
    query_params: ListNetworkAccessProfileQueryParams = dataclasses.field()
    security: ListNetworkAccessProfileSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListNetworkAccessProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_network_access_profile_response: Optional[ListNetworkAccessProfileListNetworkAccessProfileResponse] = dataclasses.field(default=None)
    
