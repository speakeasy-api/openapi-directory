import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular:
    r"""UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular
    The bandwidth settings for the 'cellular' uplink
    """
    
    limit_down: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1:
    r"""UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1
    The bandwidth settings for the 'wan1' uplink
    """
    
    limit_down: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2:
    r"""UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2
    The bandwidth settings for the 'wan2' uplink
    """
    
    limit_down: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits:
    r"""UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits
    A mapping of uplinks to their bandwidth settings (be sure to check which uplinks are supported for your network)
    """
    
    cellular: Optional[UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsCellular] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cellular') }})
    wan1: Optional[UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan1] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wan1') }})
    wan2: Optional[UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimitsWan2] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wan2') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody:
    bandwidth_limits: Optional[UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBodyBandwidthLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthLimits') }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequest:
    path_params: UpdateNetworkApplianceTrafficShapingUplinkBandwidthPathParams = dataclasses.field()
    request: Optional[UpdateNetworkApplianceTrafficShapingUplinkBandwidthRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkApplianceTrafficShapingUplinkBandwidthResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_appliance_traffic_shaping_uplink_bandwidth_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
