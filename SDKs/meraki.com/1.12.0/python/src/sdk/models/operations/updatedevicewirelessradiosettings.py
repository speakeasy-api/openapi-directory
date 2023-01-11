import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateDeviceWirelessRadioSettingsPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings:
    r"""UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings
    Manual radio settings for 5 GHz.
    """
    
    channel: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    channel_width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelWidth') }})
    target_power: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetPower') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings:
    r"""UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings
    Manual radio settings for 2.4 GHz.
    """
    
    channel: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    target_power: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetPower') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceWirelessRadioSettingsRequestBody:
    five_ghz_settings: Optional[UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fiveGhzSettings') }})
    rf_profile_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rfProfileId') }})
    two_four_ghz_settings: Optional[UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twoFourGhzSettings') }})
    

@dataclasses.dataclass
class UpdateDeviceWirelessRadioSettingsRequest:
    path_params: UpdateDeviceWirelessRadioSettingsPathParams = dataclasses.field()
    request: Optional[UpdateDeviceWirelessRadioSettingsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDeviceWirelessRadioSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_device_wireless_radio_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
