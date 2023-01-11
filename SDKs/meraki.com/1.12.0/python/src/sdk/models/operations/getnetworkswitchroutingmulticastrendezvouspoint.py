import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchRoutingMulticastRendezvousPointPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    rendezvous_point_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rendezvousPointId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchRoutingMulticastRendezvousPointRequest:
    path_params: GetNetworkSwitchRoutingMulticastRendezvousPointPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchRoutingMulticastRendezvousPointResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_routing_multicast_rendezvous_point_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
