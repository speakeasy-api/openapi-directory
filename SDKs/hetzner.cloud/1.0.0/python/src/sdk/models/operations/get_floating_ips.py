import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GetFloatingIpsSortEnum(str, Enum):
    ID = "id"
    ID_ASC = "id:asc"
    ID_DESC = "id:desc"
    CREATED = "created"
    CREATED_ASC = "created:asc"
    CREATED_DESC = "created:desc"


@dataclasses.dataclass
class GetFloatingIpsQueryParams:
    label_selector: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'label_selector', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    sort: Optional[GetFloatingIpsSortEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclasses.dataclass
class GetFloatingIps200ApplicationJSONFloatingIpsDNSPtr:
    dns_ptr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class GetFloatingIps200ApplicationJSONFloatingIpsHomeLocation:
    r"""GetFloatingIps200ApplicationJSONFloatingIpsHomeLocation
    Location the Floating IP was created in. Routing is optimized for this Location.
    """
    
    city: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    latitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_zone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    

@dataclass_json
@dataclasses.dataclass
class GetFloatingIps200ApplicationJSONFloatingIpsProtection:
    r"""GetFloatingIps200ApplicationJSONFloatingIpsProtection
    Protection configuration for the Resource
    """
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class GetFloatingIps200ApplicationJSONFloatingIpsTypeEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"


@dataclass_json
@dataclasses.dataclass
class GetFloatingIps200ApplicationJSONFloatingIps:
    blocked: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dns_ptr: list[GetFloatingIps200ApplicationJSONFloatingIpsDNSPtr] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    home_location: GetFloatingIps200ApplicationJSONFloatingIpsHomeLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_location') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: GetFloatingIps200ApplicationJSONFloatingIpsProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    server: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: GetFloatingIps200ApplicationJSONFloatingIpsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetFloatingIps200ApplicationJSONMetaPagination:
    last_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_page') }})
    next_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    previous_page: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('previous_page') }})
    total_entries: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    

@dataclass_json
@dataclasses.dataclass
class GetFloatingIps200ApplicationJSONMeta:
    pagination: GetFloatingIps200ApplicationJSONMetaPagination = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pagination') }})
    

@dataclass_json
@dataclasses.dataclass
class GetFloatingIps200ApplicationJSON:
    floating_ips: list[GetFloatingIps200ApplicationJSONFloatingIps] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ips') }})
    meta: Optional[GetFloatingIps200ApplicationJSONMeta] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclasses.dataclass
class GetFloatingIpsRequest:
    query_params: GetFloatingIpsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFloatingIpsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_floating_ips_200_application_json_object: Optional[GetFloatingIps200ApplicationJSON] = dataclasses.field(default=None)
    
