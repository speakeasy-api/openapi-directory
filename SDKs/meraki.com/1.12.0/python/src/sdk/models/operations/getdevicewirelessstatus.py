import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceWirelessStatusPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceWirelessStatusRequest:
    path_params: GetDeviceWirelessStatusPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceWirelessStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_wireless_status_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
