import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkCellularGatewayUplinkPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits:
    r"""UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits
    The bandwidth settings for the 'cellular' uplink
    """
    
    limit_down: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitDown') }})
    limit_up: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limitUp') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkCellularGatewayUplinkRequestBody:
    bandwidth_limits: Optional[UpdateNetworkCellularGatewayUplinkRequestBodyBandwidthLimits] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandwidthLimits') }})
    

@dataclasses.dataclass
class UpdateNetworkCellularGatewayUplinkRequest:
    path_params: UpdateNetworkCellularGatewayUplinkPathParams = dataclasses.field()
    request: Optional[UpdateNetworkCellularGatewayUplinkRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkCellularGatewayUplinkResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_cellular_gateway_uplink_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
