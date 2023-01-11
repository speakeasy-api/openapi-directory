import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateDeviceWirelessBluetoothSettingsPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceWirelessBluetoothSettingsRequestBody:
    major: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('major') }})
    minor: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minor') }})
    uuid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uuid') }})
    

@dataclasses.dataclass
class UpdateDeviceWirelessBluetoothSettingsRequest:
    path_params: UpdateDeviceWirelessBluetoothSettingsPathParams = dataclasses.field()
    request: Optional[UpdateDeviceWirelessBluetoothSettingsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDeviceWirelessBluetoothSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_device_wireless_bluetooth_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
