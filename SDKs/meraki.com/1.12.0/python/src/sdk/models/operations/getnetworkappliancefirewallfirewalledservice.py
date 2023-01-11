import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceFirewallFirewalledServicePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    service: str = dataclasses.field(metadata={'path_param': { 'field_name': 'service', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceFirewallFirewalledServiceRequest:
    path_params: GetNetworkApplianceFirewallFirewalledServicePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceFirewallFirewalledServiceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_firewall_firewalled_service_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
