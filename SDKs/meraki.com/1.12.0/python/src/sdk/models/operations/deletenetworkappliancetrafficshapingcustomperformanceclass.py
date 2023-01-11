import dataclasses



@dataclasses.dataclass
class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassPathParams:
    custom_performance_class_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customPerformanceClassId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassRequest:
    path_params: DeleteNetworkApplianceTrafficShapingCustomPerformanceClassPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DeleteNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
