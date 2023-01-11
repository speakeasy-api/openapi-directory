import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchDhcpServerPolicyPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchDhcpServerPolicyRequest:
    path_params: GetNetworkSwitchDhcpServerPolicyPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchDhcpServerPolicyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_dhcp_server_policy_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
