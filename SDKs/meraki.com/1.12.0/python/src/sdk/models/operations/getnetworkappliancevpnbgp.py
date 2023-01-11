import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceVpnBgpPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceVpnBgpRequest:
    path_params: GetNetworkApplianceVpnBgpPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceVpnBgpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_vpn_bgp_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
