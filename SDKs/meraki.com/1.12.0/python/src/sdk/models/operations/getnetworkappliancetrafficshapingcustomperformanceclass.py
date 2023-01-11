import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetNetworkApplianceTrafficShapingCustomPerformanceClassPathParams:
    custom_performance_class_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customPerformanceClassId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetNetworkApplianceTrafficShapingCustomPerformanceClassRequest:
    path_params: GetNetworkApplianceTrafficShapingCustomPerformanceClassPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_network_appliance_traffic_shaping_custom_performance_class_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
