import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceTrafficShapingCustomPerformanceClassesPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceTrafficShapingCustomPerformanceClassesRequest:
    path_params: GetNetworkApplianceTrafficShapingCustomPerformanceClassesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceTrafficShapingCustomPerformanceClassesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_traffic_shaping_custom_performance_classes_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
