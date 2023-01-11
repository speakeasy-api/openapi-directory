import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceSwitchPortPathParams:
    port_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'portId', 'style': 'simple', 'explode': False }})
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceSwitchPortRequest:
    path_params: GetDeviceSwitchPortPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceSwitchPortResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_switch_port_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
