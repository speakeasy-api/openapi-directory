import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceFirewallOneToManyNatRulesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceFirewallOneToManyNatRulesRequest:
    path_params: GetNetworkApplianceFirewallOneToManyNatRulesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceFirewallOneToManyNatRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_firewall_one_to_many_nat_rules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
