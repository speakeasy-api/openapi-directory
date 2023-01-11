import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkTrafficAnalysisPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkTrafficAnalysisRequest:
    path_params: GetNetworkTrafficAnalysisPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkTrafficAnalysisResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_traffic_analysis_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
