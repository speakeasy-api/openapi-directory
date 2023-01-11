import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchRoutingOspfPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchRoutingOspfRequest:
    path_params: GetNetworkSwitchRoutingOspfPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchRoutingOspfResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_routing_ospf_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
