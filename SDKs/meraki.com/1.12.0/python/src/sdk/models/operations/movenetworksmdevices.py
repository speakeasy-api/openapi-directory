import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class MoveNetworkSmDevicesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class MoveNetworkSmDevicesRequestBody:
    new_network: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('newNetwork') }})
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    scope: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    serials: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serials') }})
    wifi_macs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiMacs') }})
    

@dataclasses.dataclass
class MoveNetworkSmDevicesRequest:
    path_params: MoveNetworkSmDevicesPathParams = dataclasses.field()
    request: MoveNetworkSmDevicesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class MoveNetworkSmDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    move_network_sm_devices_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
