import dataclasses



@dataclasses.dataclass
class DeleteNetworkApplianceStaticRoutePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    static_route_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'staticRouteId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkApplianceStaticRouteRequest:
    path_params: DeleteNetworkApplianceStaticRoutePathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkApplianceStaticRouteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
