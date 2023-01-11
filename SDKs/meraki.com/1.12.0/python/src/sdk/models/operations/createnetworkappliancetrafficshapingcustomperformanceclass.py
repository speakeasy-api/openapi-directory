import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    max_jitter: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxJitter') }})
    max_latency: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLatency') }})
    max_loss_percentage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLossPercentage') }})
    

@dataclasses.dataclass
class CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequest:
    path_params: CreateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams = dataclasses.field()
    request: CreateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_appliance_traffic_shaping_custom_performance_class_201_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
