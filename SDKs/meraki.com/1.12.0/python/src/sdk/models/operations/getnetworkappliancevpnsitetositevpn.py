import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceVpnSiteToSiteVpnPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceVpnSiteToSiteVpnRequest:
    path_params: GetNetworkApplianceVpnSiteToSiteVpnPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceVpnSiteToSiteVpnResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_vpn_site_to_site_vpn_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
