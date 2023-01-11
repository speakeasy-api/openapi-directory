import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceVlansPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceVlansRequest:
    path_params: GetNetworkApplianceVlansPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceVlansResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_vlans_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
