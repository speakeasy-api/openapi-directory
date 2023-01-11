import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceSwitchRoutingStaticRoutesPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceSwitchRoutingStaticRoutesRequest:
    path_params: GetDeviceSwitchRoutingStaticRoutesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceSwitchRoutingStaticRoutesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_switch_routing_static_routes_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
