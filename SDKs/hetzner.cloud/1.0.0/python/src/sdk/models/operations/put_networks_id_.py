import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class PutNetworksIDPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class PutNetworksIDUpdateNetworkRequestLabels:
    r"""PutNetworksIDUpdateNetworkRequestLabels
    User-defined labels (key-value pairs)
    """
    
    labelkey: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelkey') }})
    

@dataclass_json
@dataclasses.dataclass
class PutNetworksIDUpdateNetworkRequest:
    labels: Optional[PutNetworksIDUpdateNetworkRequestLabels] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclasses.dataclass
class PutNetworksID200ApplicationJSONNetworkProtection:
    r"""PutNetworksID200ApplicationJSONNetworkProtection
    Protection configuration for the Network
    """
    
    delete: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    

@dataclass_json
@dataclasses.dataclass
class PutNetworksID200ApplicationJSONNetworkRoutes:
    destination: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    gateway: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    
class PutNetworksID200ApplicationJSONNetworkSubnetsTypeEnum(str, Enum):
    CLOUD = "cloud"
    SERVER = "server"
    VSWITCH = "vswitch"


@dataclass_json
@dataclasses.dataclass
class PutNetworksID200ApplicationJSONNetworkSubnets:
    gateway: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gateway') }})
    network_zone: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_zone') }})
    type: PutNetworksID200ApplicationJSONNetworkSubnetsTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    ip_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    

@dataclass_json
@dataclasses.dataclass
class PutNetworksID200ApplicationJSONNetwork:
    created: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ip_range: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_range') }})
    labels: dict[str, Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection: PutNetworksID200ApplicationJSONNetworkProtection = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('protection') }})
    routes: list[PutNetworksID200ApplicationJSONNetworkRoutes] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('routes') }})
    servers: list[int] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('servers') }})
    subnets: list[PutNetworksID200ApplicationJSONNetworkSubnets] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subnets') }})
    load_balancers: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_balancers') }})
    

@dataclass_json
@dataclasses.dataclass
class PutNetworksID200ApplicationJSON:
    network: Optional[PutNetworksID200ApplicationJSONNetwork] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    

@dataclasses.dataclass
class PutNetworksIDRequest:
    path_params: PutNetworksIDPathParams = dataclasses.field()
    request: Optional[PutNetworksIDUpdateNetworkRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class PutNetworksIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    put_networks_id_200_application_json_object: Optional[PutNetworksID200ApplicationJSON] = dataclasses.field(default=None)
    
