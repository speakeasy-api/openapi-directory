import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CheckinNetworkSmDevicesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CheckinNetworkSmDevicesRequestBody:
    ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    scope: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    serials: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serials') }})
    wifi_macs: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wifiMacs') }})
    

@dataclasses.dataclass
class CheckinNetworkSmDevicesRequest:
    path_params: CheckinNetworkSmDevicesPathParams = dataclasses.field()
    request: Optional[CheckinNetworkSmDevicesRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CheckinNetworkSmDevicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    checkin_network_sm_devices_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
