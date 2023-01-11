import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchQosRulePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    qos_rule_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'qosRuleId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchQosRuleRequest:
    path_params: GetNetworkSwitchQosRulePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchQosRuleResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_qos_rule_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
