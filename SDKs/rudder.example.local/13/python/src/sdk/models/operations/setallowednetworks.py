import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class SetAllowedNetworksPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class SetAllowedNetworksRequestBody:
    value: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class SetAllowedNetworks200ApplicationJSONActionEnum(str, Enum):
    MODIFY_ALLOWED_NETWORKS = "modifyAllowedNetworks"


@dataclass_json
@dataclasses.dataclass
class SetAllowedNetworks200ApplicationJSONData:
    r"""SetAllowedNetworks200ApplicationJSONData
    Information about the allowed_networks settings
    """
    
    allowed_networks: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_networks') }})
    
class SetAllowedNetworks200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class SetAllowedNetworks200ApplicationJSON:
    action: SetAllowedNetworks200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: SetAllowedNetworks200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: SetAllowedNetworks200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclasses.dataclass
class SetAllowedNetworksRequest:
    path_params: SetAllowedNetworksPathParams = dataclasses.field()
    request: SetAllowedNetworksRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class SetAllowedNetworksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    set_allowed_networks_200_application_json_object: Optional[SetAllowedNetworks200ApplicationJSON] = dataclasses.field(default=None)
    
