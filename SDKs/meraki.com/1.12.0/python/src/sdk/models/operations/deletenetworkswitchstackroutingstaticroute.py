import dataclasses



@dataclasses.dataclass
class DeleteNetworkSwitchStackRoutingStaticRoutePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    static_route_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'staticRouteId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkSwitchStackRoutingStaticRouteRequest:
    path_params: DeleteNetworkSwitchStackRoutingStaticRoutePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkSwitchStackRoutingStaticRouteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
