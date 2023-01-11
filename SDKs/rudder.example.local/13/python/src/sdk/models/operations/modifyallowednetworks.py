import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class ModifyAllowedNetworksPathParams:
    node_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class ModifyAllowedNetworksRequestBodyAllowedNetworks:
    add: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add') }})
    delete: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delete') }})
    

@dataclass_json
@dataclasses.dataclass
class ModifyAllowedNetworksRequestBody:
    allowed_networks: Optional[ModifyAllowedNetworksRequestBodyAllowedNetworks] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_networks') }})
    
class ModifyAllowedNetworks200ApplicationJSONActionEnum(str, Enum):
    MODIFY_SETTING = "modifySetting"


@dataclass_json
@dataclasses.dataclass
class ModifyAllowedNetworks200ApplicationJSONData:
    r"""ModifyAllowedNetworks200ApplicationJSONData
    Information about the allowed_networks settings
    """
    
    allowed_networks: Optional[list[Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_networks') }})
    
class ModifyAllowedNetworks200ApplicationJSONResultEnum(str, Enum):
    SUCCESS = "success"
    ERROR = "error"


@dataclass_json
@dataclasses.dataclass
class ModifyAllowedNetworks200ApplicationJSON:
    action: ModifyAllowedNetworks200ApplicationJSONActionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    data: ModifyAllowedNetworks200ApplicationJSONData = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    result: ModifyAllowedNetworks200ApplicationJSONResultEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclasses.dataclass
class ModifyAllowedNetworksRequest:
    path_params: ModifyAllowedNetworksPathParams = dataclasses.field()
    request: ModifyAllowedNetworksRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ModifyAllowedNetworksResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    modify_allowed_networks_200_application_json_object: Optional[ModifyAllowedNetworks200ApplicationJSON] = dataclasses.field(default=None)
    
