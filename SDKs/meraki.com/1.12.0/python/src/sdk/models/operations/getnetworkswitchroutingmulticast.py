import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchRoutingMulticastPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchRoutingMulticastRequest:
    path_params: GetNetworkSwitchRoutingMulticastPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchRoutingMulticastResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_routing_multicast_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
