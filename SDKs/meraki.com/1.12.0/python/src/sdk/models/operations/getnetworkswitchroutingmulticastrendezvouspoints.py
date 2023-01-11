import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchRoutingMulticastRendezvousPointsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchRoutingMulticastRendezvousPointsRequest:
    path_params: GetNetworkSwitchRoutingMulticastRendezvousPointsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchRoutingMulticastRendezvousPointsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_routing_multicast_rendezvous_points_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
