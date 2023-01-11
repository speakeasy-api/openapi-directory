import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSwitchMtuPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchMtuRequestBodyOverrides:
    mtu_size: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mtuSize') }})
    switch_profiles: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switchProfiles') }})
    switches: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('switches') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchMtuRequestBody:
    default_mtu_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defaultMtuSize') }})
    overrides: Optional[list[UpdateNetworkSwitchMtuRequestBodyOverrides]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overrides') }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchMtuRequest:
    path_params: UpdateNetworkSwitchMtuPathParams = dataclasses.field()
    request: Optional[UpdateNetworkSwitchMtuRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchMtuResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_switch_mtu_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
