import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceVlanPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    vlan_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'vlanId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceVlanRequest:
    path_params: GetNetworkApplianceVlanPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceVlanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_vlan_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
