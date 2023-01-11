import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSwitchStormControlPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchStormControlRequestBody:
    broadcast_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('broadcastThreshold') }})
    multicast_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multicastThreshold') }})
    unknown_unicast_threshold: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unknownUnicastThreshold') }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchStormControlRequest:
    path_params: UpdateNetworkSwitchStormControlPathParams = dataclasses.field()
    request: Optional[UpdateNetworkSwitchStormControlRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchStormControlResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_switch_storm_control_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
