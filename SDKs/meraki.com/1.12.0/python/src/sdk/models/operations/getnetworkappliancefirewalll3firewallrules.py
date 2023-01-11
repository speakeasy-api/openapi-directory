import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceFirewallL3FirewallRulesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceFirewallL3FirewallRulesRequest:
    path_params: GetNetworkApplianceFirewallL3FirewallRulesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceFirewallL3FirewallRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_firewall_l3_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
