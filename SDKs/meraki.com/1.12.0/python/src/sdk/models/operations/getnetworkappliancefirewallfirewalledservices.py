import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceFirewallFirewalledServicesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceFirewallFirewalledServicesRequest:
    path_params: GetNetworkApplianceFirewallFirewalledServicesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceFirewallFirewalledServicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_firewall_firewalled_services_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
