import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceContentFilteringPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceContentFilteringRequest:
    path_params: GetNetworkApplianceContentFilteringPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceContentFilteringResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_content_filtering_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
