import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class PostNetworksCreateNetworkRequestLabels:
    r"""PostNetworksCreateNetworkRequestLabels
    User-defined labels (key-value pairs)
    """
    
    labelkey: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelkey') }})
    

@dataclass_json
@dataclasses.dataclass
class PostNetworksCreateNetworkRequestRoutes:
    destination: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    gateway: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    
class PostNetworksCreateNetworkRequestSubnetsTypeEnum(str, Enum):
    CLOUD = "cloud"
    SERVER = "server"
    VSWITCH = "vswitch"


@dataclass_json
@dataclasses.dataclass
class PostNetworksCreateNetworkRequestSubnets:
    network_zone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    type: PostNetworksCreateNetworkRequestSubnetsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    ip_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    

@dataclass_json
@dataclasses.dataclass
class PostNetworksCreateNetworkRequest:
    ip_range: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    labels: Optional[PostNetworksCreateNetworkRequestLabels] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    routes: Optional[list[PostNetworksCreateNetworkRequestRoutes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    subnets: Optional[list[PostNetworksCreateNetworkRequestSubnets]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    

@dataclass_json
@dataclasses.dataclass
class PostNetworks201ApplicationJSONNetworkProtection:
    r"""PostNetworks201ApplicationJSONNetworkProtection
    Protection configuration for the Network
    """
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    

@dataclass_json
@dataclasses.dataclass
class PostNetworks201ApplicationJSONNetworkRoutes:
    destination: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    gateway: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    
class PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum(str, Enum):
    CLOUD = "cloud"
    SERVER = "server"
    VSWITCH = "vswitch"


@dataclass_json
@dataclasses.dataclass
class PostNetworks201ApplicationJSONNetworkSubnets:
    gateway: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    network_zone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    type: PostNetworks201ApplicationJSONNetworkSubnetsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    ip_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    

@dataclass_json
@dataclasses.dataclass
class PostNetworks201ApplicationJSONNetwork:
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip_range: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    labels: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: PostNetworks201ApplicationJSONNetworkProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    routes: list[PostNetworks201ApplicationJSONNetworkRoutes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    servers: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    subnets: list[PostNetworks201ApplicationJSONNetworkSubnets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    load_balancers: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancers') }})
    

@dataclass_json
@dataclasses.dataclass
class PostNetworks201ApplicationJSON:
    network: Optional[PostNetworks201ApplicationJSONNetwork] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclasses.dataclass
class PostNetworksRequest:
    request: Optional[PostNetworksCreateNetworkRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PostNetworksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    post_networks_201_application_json_object: Optional[PostNetworks201ApplicationJSON] = dataclasses.field(default=None)
    
