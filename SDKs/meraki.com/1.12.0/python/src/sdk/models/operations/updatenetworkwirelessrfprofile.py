import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkWirelessRfProfilePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    rf_profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rfProfileId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum(str, Enum):
    DUAL = "dual"
    TWO_4GHZ = "2.4ghz"
    FIVEGHZ = "5ghz"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessRfProfileRequestBodyApBandSettings:
    r"""UpdateNetworkWirelessRfProfileRequestBodyApBandSettings
    Settings that will be enabled if selectionType is set to 'ap'.
    """
    
    band_operation_mode: Optional[UpdateNetworkWirelessRfProfileRequestBodyApBandSettingsBandOperationModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandOperationMode') }})
    band_steering_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandSteeringEnabled') }})
    
class UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum(str, Enum):
    SSID = "ssid"
    AP = "ap"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings:
    r"""UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings
    Settings related to 5Ghz band
    """
    
    channel_width: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelWidth') }})
    max_power: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPower') }})
    min_bitrate: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minBitrate') }})
    min_power: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minPower') }})
    rxsop: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rxsop') }})
    valid_auto_channels: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validAutoChannels') }})
    
class UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum(str, Enum):
    BAND = "band"
    SSID = "ssid"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings:
    r"""UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings
    Settings related to 2.4Ghz band
    """
    
    ax_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('axEnabled') }})
    max_power: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPower') }})
    min_bitrate: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minBitrate') }})
    min_power: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minPower') }})
    rxsop: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rxsop') }})
    valid_auto_channels: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validAutoChannels') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessRfProfileRequestBody:
    ap_band_settings: Optional[UpdateNetworkWirelessRfProfileRequestBodyApBandSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apBandSettings') }})
    band_selection_type: Optional[UpdateNetworkWirelessRfProfileRequestBodyBandSelectionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bandSelectionType') }})
    client_balancing_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clientBalancingEnabled') }})
    five_ghz_settings: Optional[UpdateNetworkWirelessRfProfileRequestBodyFiveGhzSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fiveGhzSettings') }})
    min_bitrate_type: Optional[UpdateNetworkWirelessRfProfileRequestBodyMinBitrateTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minBitrateType') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    two_four_ghz_settings: Optional[UpdateNetworkWirelessRfProfileRequestBodyTwoFourGhzSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twoFourGhzSettings') }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessRfProfileRequest:
    path_params: UpdateNetworkWirelessRfProfilePathParams = dataclasses.field()
    request: Optional[UpdateNetworkWirelessRfProfileRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessRfProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_wireless_rf_profile_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
