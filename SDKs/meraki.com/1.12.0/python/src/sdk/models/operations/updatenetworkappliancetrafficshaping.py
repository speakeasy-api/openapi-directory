import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkApplianceTrafficShapingPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits:
    r"""UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits
    Global per-client bandwidth limit
    """
    
    limit_down: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceTrafficShapingRequestBody:
    global_bandwidth_limits: Optional[UpdateNetworkApplianceTrafficShapingRequestBodyGlobalBandwidthLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('globalBandwidthLimits') }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceTrafficShapingRequest:
    path_params: UpdateNetworkApplianceTrafficShapingPathParams = dataclasses.field()
    request: Optional[UpdateNetworkApplianceTrafficShapingRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceTrafficShapingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_appliance_traffic_shaping_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
