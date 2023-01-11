import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceWirelessBluetoothSettingsPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceWirelessBluetoothSettingsRequest:
    path_params: GetDeviceWirelessBluetoothSettingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceWirelessBluetoothSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_wireless_bluetooth_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
