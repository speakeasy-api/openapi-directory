import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceStaticRoutePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    static_route_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'staticRouteId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceStaticRouteRequest:
    path_params: GetNetworkApplianceStaticRoutePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceStaticRouteResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_static_route_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
