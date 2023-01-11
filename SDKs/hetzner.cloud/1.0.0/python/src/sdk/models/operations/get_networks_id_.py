import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetNetworksIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class GetNetworksID200ApplicationJSONNetworkProtection:
    r"""GetNetworksID200ApplicationJSONNetworkProtection
    Protection configuration for the Network
    """
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    

@dataclass_json
@dataclasses.dataclass
class GetNetworksID200ApplicationJSONNetworkRoutes:
    destination: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    gateway: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    
class GetNetworksID200ApplicationJSONNetworkSubnetsTypeEnum(str, Enum):
    CLOUD = "cloud"
    SERVER = "server"
    VSWITCH = "vswitch"


@dataclass_json
@dataclasses.dataclass
class GetNetworksID200ApplicationJSONNetworkSubnets:
    gateway: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    network_zone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    type: GetNetworksID200ApplicationJSONNetworkSubnetsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    ip_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    

@dataclass_json
@dataclasses.dataclass
class GetNetworksID200ApplicationJSONNetwork:
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip_range: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    labels: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: GetNetworksID200ApplicationJSONNetworkProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    routes: list[GetNetworksID200ApplicationJSONNetworkRoutes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    servers: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    subnets: list[GetNetworksID200ApplicationJSONNetworkSubnets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    load_balancers: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancers') }})
    

@dataclass_json
@dataclasses.dataclass
class GetNetworksID200ApplicationJSON:
    network: Optional[GetNetworksID200ApplicationJSONNetwork] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclasses.dataclass
class GetNetworksIDRequest:
    path_params: GetNetworksIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworksIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_networks_id_200_application_json_object: Optional[GetNetworksID200ApplicationJSON] = dataclasses.field(default=None)
    
