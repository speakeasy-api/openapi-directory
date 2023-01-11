import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceWirelessRadioSettingsPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceWirelessRadioSettingsRequest:
    path_params: GetDeviceWirelessRadioSettingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceWirelessRadioSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_wireless_radio_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
