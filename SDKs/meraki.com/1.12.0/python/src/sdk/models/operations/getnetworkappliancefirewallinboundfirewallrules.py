import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceFirewallInboundFirewallRulesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceFirewallInboundFirewallRulesRequest:
    path_params: GetNetworkApplianceFirewallInboundFirewallRulesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceFirewallInboundFirewallRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_firewall_inbound_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
