import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkWirelessSsidFirewallL7FirewallRulesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'number', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkWirelessSsidFirewallL7FirewallRulesRequest:
    path_params: GetNetworkWirelessSsidFirewallL7FirewallRulesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkWirelessSsidFirewallL7FirewallRulesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_wireless_ssid_firewall_l7_firewall_rules_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
