import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkWirelessBluetoothSettingsPathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum(str, Enum):
    UNIQUE = "Unique"
    NON_UNIQUE = "Non-unique"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkWirelessBluetoothSettingsRequestBody:
    advertising_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertisingEnabled') }})
    major: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('major') }})
    major_minor_assignment_mode: Optional[UpdateNetworkWirelessBluetoothSettingsRequestBodyMajorMinorAssignmentModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('majorMinorAssignmentMode') }})
    minor: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minor') }})
    scanning_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scanningEnabled') }})
    uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessBluetoothSettingsRequest:
    path_params: UpdateNetworkWirelessBluetoothSettingsPathParams = dataclasses.field()
    request: Optional[UpdateNetworkWirelessBluetoothSettingsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkWirelessBluetoothSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_wireless_bluetooth_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
