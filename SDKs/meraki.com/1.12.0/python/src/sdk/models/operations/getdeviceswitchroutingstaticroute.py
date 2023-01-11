import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceSwitchRoutingStaticRoutePathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    static_route_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'staticRouteId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceSwitchRoutingStaticRouteRequest:
    path_params: GetDeviceSwitchRoutingStaticRoutePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceSwitchRoutingStaticRouteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_switch_routing_static_route_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
