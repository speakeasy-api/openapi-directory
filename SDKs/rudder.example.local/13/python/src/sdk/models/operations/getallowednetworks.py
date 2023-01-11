import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class GetAllowedNetworksPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    
class GetAllowedNetworks200ApplicationJSONActionEnum(str, Enum):
    GET_ALLOWED_NETWORKS = "getAllowedNetworks"


@dataclass_json
@dataclasses.dataclass
class GetAllowedNetworks200ApplicationJSONDataSettings:
    allowed_networks: list[Any] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_networks') }})
    

@dataclass_json
@dataclasses.dataclass
class GetAllowedNetworks200ApplicationJSONData:
    r"""GetAllowedNetworks200ApplicationJSONData
    Information about the allowed_networks settings
    """
    
    settings: GetAllowedNetworks200ApplicationJSONDataSettings = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
class GetAllowedNetworks200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class GetAllowedNetworks200ApplicationJSON:
    action: GetAllowedNetworks200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: GetAllowedNetworks200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    result: GetAllowedNetworks200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class GetAllowedNetworksRequest:
    path_params: GetAllowedNetworksPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAllowedNetworksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_allowed_networks_200_application_json_object: Optional[GetAllowedNetworks200ApplicationJSON] = dataclasses.field(default=None)
    
