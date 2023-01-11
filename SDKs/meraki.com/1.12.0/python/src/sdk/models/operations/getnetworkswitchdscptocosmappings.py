import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkSwitchDscpToCosMappingsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkSwitchDscpToCosMappingsRequest:
    path_params: GetNetworkSwitchDscpToCosMappingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkSwitchDscpToCosMappingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_switch_dscp_to_cos_mappings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
