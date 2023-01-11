import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceFirewallOneToOneNatRulesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceFirewallOneToOneNatRulesRequest:
    path_params: GetNetworkApplianceFirewallOneToOneNatRulesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceFirewallOneToOneNatRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_firewall_one_to_one_nat_rules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
