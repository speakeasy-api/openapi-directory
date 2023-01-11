import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchStackRoutingStaticRoutesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    switch_stack_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'switchStackId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchStackRoutingStaticRoutesRequest:
    path_params: GetNetworkSwitchStackRoutingStaticRoutesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchStackRoutingStaticRoutesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_stack_routing_static_routes_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
