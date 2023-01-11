import dataclasses



@dataclasses.dataclass
class DeleteDeviceSwitchRoutingStaticRoutePathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    static_route_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'staticRouteId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteDeviceSwitchRoutingStaticRouteRequest:
    path_params: DeleteDeviceSwitchRoutingStaticRoutePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteDeviceSwitchRoutingStaticRouteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
