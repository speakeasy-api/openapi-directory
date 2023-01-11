import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class GetDeviceAppliancePerformancePathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetDeviceAppliancePerformanceRequest:
    path_params: GetDeviceAppliancePerformancePathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetDeviceAppliancePerformanceResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_device_appliance_performance_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
