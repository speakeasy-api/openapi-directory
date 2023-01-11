import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetFloatingIpsIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetFloatingIpsID200ApplicationJSONFloatingIPDNSPtr:
    dns_ptr: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    

@dataclass_json
@dataclasses.dataclass
class GetFloatingIpsID200ApplicationJSONFloatingIPHomeLocation:
    r"""GetFloatingIpsID200ApplicationJSONFloatingIPHomeLocation
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
class GetFloatingIpsID200ApplicationJSONFloatingIPProtection:
    r"""GetFloatingIpsID200ApplicationJSONFloatingIPProtection
    Protection configuration for the Resource
    """
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    
class GetFloatingIpsID200ApplicationJSONFloatingIPTypeEnum(str, Enum):
    IPV4 = "ipv4"
    IPV6 = "ipv6"


@dataclass_json
@dataclasses.dataclass
class GetFloatingIpsID200ApplicationJSONFloatingIP:
    blocked: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    description: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    dns_ptr: list[GetFloatingIpsID200ApplicationJSONFloatingIPDNSPtr] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dns_ptr') }})
    home_location: GetFloatingIpsID200ApplicationJSONFloatingIPHomeLocation = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_location') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    labels: dict[str, str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: GetFloatingIpsID200ApplicationJSONFloatingIPProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    server: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('server') }})
    type: GetFloatingIpsID200ApplicationJSONFloatingIPTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclasses.dataclass
class GetFloatingIpsID200ApplicationJSON:
    floating_ip: GetFloatingIpsID200ApplicationJSONFloatingIP = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('floating_ip') }})
    

@dataclasses.dataclass
class GetFloatingIpsIDRequest:
    path_params: GetFloatingIpsIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFloatingIpsIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_floating_ips_id_200_application_json_object: Optional[GetFloatingIpsID200ApplicationJSON] = dataclasses.field(default=None)
    
