import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceSwitchWarmSparePathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceSwitchWarmSpareRequest:
    path_params: GetDeviceSwitchWarmSparePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceSwitchWarmSpareResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_switch_warm_spare_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
