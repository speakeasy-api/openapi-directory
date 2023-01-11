import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams:
    custom_performance_class_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'customPerformanceClassId', 'style': 'simple', 'explode': False }})
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody:
    max_jitter: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxJitter') }})
    max_latency: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLatency') }})
    max_loss_percentage: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLossPercentage') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequest:
    path_params: UpdateNetworkApplianceTrafficShapingCustomPerformanceClassPathParams = dataclasses.field()
    request: Optional[UpdateNetworkApplianceTrafficShapingCustomPerformanceClassRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceTrafficShapingCustomPerformanceClassResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_appliance_traffic_shaping_custom_performance_class_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
