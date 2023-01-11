import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchQosRulesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchQosRulesRequest:
    path_params: GetNetworkSwitchQosRulesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchQosRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_qos_rules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
