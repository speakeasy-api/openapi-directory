import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceSingleLanPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceSingleLanRequest:
    path_params: GetNetworkApplianceSingleLanPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceSingleLanResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_single_lan_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
