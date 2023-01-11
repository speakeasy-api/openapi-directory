import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceSwitchPortsPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceSwitchPortsRequest:
    path_params: GetDeviceSwitchPortsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceSwitchPortsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_switch_ports_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
