import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import supersim_v1_network as shared_supersim_v1_network


LIST_NETWORK_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class ListNetworkQueryParams:
    iso_country: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'IsoCountry', 'style': 'form', 'explode': True }})
    mcc: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Mcc', 'style': 'form', 'explode': True }})
    mnc: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'Mnc', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListNetworkSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListNetworkListNetworkResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListNetworkListNetworkResponse:
    meta: Optional[ListNetworkListNetworkResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    networks: Optional[list[shared_supersim_v1_network.SupersimV1Network]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networks') }})
    

@dataclasses.dataclass
class ListNetworkRequest:
    query_params: ListNetworkQueryParams = dataclasses.field()
    security: ListNetworkSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListNetworkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_network_response: Optional[ListNetworkListNetworkResponse] = dataclasses.field(default=None)
    
