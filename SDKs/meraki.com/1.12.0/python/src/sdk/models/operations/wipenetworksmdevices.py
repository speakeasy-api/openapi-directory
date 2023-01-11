import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class WipeNetworkSmDevicesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class WipeNetworkSmDevicesRequestBody:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    pin: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pin') }})
    serial: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    wifi_mac: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiMac') }})
    

@dataclasses.dataclass
class WipeNetworkSmDevicesRequest:
    path_params: WipeNetworkSmDevicesPathParams = dataclasses.field()
    request: Optional[WipeNetworkSmDevicesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class WipeNetworkSmDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    wipe_network_sm_devices_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
