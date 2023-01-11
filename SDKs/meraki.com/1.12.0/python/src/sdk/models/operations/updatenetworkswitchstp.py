import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSwitchStpPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchStpRequestBodyStpBridgePriority:
    stp_priority: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stpPriority') }})
    stacks: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stacks') }})
    switch_profiles: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switchProfiles') }})
    switches: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switches') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchStpRequestBody:
    rstp_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rstpEnabled') }})
    stp_bridge_priority: Optional[list[UpdateNetworkSwitchStpRequestBodyStpBridgePriority]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stpBridgePriority') }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchStpRequest:
    path_params: UpdateNetworkSwitchStpPathParams = dataclasses.field()
    request: Optional[UpdateNetworkSwitchStpRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchStpResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_switch_stp_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
