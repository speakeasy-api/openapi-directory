import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesRequest:
    path_params: GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceFirewallL7FirewallRulesApplicationCategoriesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_firewall_l7_firewall_rules_application_categories_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
