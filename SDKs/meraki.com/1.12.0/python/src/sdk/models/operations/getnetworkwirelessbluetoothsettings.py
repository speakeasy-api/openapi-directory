import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkWirelessBluetoothSettingsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkWirelessBluetoothSettingsRequest:
    path_params: GetNetworkWirelessBluetoothSettingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWirelessBluetoothSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_wireless_bluetooth_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
