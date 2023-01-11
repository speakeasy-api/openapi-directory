import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkWirelessSettingsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum(str, Enum):
    MINIMIZE_UPGRADE_TIME = "minimizeUpgradeTime"
    MINIMIZE_CLIENT_DOWNTIME = "minimizeClientDowntime"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessSettingsRequestBody:
    ipv6_bridge_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipv6BridgeEnabled') }})
    led_lights_on: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ledLightsOn') }})
    location_analytics_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationAnalyticsEnabled') }})
    meshing_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meshingEnabled') }})
    upgrade_strategy: Optional[UpdateNetworkWirelessSettingsRequestBodyUpgradeStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upgradeStrategy') }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSettingsRequest:
    path_params: UpdateNetworkWirelessSettingsPathParams = dataclasses.field()
    request: Optional[UpdateNetworkWirelessSettingsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_wireless_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
