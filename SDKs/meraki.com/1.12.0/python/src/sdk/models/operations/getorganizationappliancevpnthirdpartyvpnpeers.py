import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetOrganizationApplianceVpnThirdPartyVpnPeersPathParams:
    organization_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetOrganizationApplianceVpnThirdPartyVpnPeersRequest:
    path_params: GetOrganizationApplianceVpnThirdPartyVpnPeersPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetOrganizationApplianceVpnThirdPartyVpnPeersResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_organization_appliance_vpn_third_party_vpn_peers_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
