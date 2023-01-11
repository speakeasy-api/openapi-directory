import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchQosRulesOrderPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchQosRulesOrderRequest:
    path_params: GetNetworkSwitchQosRulesOrderPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchQosRulesOrderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_qos_rules_order_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
