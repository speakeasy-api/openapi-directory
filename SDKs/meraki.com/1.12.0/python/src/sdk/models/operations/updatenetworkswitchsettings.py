import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkSwitchSettingsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum(str, Enum):
    COMBINED = "combined"
    REDUNDANT = "redundant"
    USE_NETWORK_SETTING = "useNetworkSetting"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchSettingsRequestBodyPowerExceptions:
    power_type: UpdateNetworkSwitchSettingsRequestBodyPowerExceptionsPowerTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerType') }})
    serial: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serial') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkSwitchSettingsRequestBody:
    power_exceptions: Optional[list[UpdateNetworkSwitchSettingsRequestBodyPowerExceptions]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerExceptions') }})
    use_combined_power: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useCombinedPower') }})
    vlan: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vlan') }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchSettingsRequest:
    path_params: UpdateNetworkSwitchSettingsPathParams = dataclasses.field()
    request: Optional[UpdateNetworkSwitchSettingsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkSwitchSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_switch_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
