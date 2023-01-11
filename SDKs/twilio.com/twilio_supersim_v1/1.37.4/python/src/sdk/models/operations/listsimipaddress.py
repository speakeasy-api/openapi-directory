import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import security as shared_security
from ..shared import supersim_v1_sim_sim_ip_address as shared_supersim_v1_sim_sim_ip_address


LIST_SIM_IP_ADDRESS_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclasses.dataclass
class ListSimIPAddressPathParams:
    sim_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'SimSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListSimIPAddressQueryParams:
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListSimIPAddressSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass_json
@dataclasses.dataclass
class ListSimIPAddressListSimIPAddressResponseMeta:
    first_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_page_url') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    next_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page_url') }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page_size') }})
    previous_page_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page_url') }})
    url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclasses.dataclass
class ListSimIPAddressListSimIPAddressResponse:
    ip_addresses: Optional[list[shared_supersim_v1_sim_sim_ip_address.SupersimV1SimSimIPAddress]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_addresses') }})
    meta: Optional[ListSimIPAddressListSimIPAddressResponseMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class ListSimIPAddressRequest:
    path_params: ListSimIPAddressPathParams = dataclasses.field()
    query_params: ListSimIPAddressQueryParams = dataclasses.field()
    security: ListSimIPAddressSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class ListSimIPAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_sim_ip_address_response: Optional[ListSimIPAddressListSimIPAddressResponse] = dataclasses.field(default=None)
    
