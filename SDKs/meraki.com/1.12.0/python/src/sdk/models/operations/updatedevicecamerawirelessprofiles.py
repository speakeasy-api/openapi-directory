import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateDeviceCameraWirelessProfilesPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceCameraWirelessProfilesRequestBodyIds:
    r"""UpdateDeviceCameraWirelessProfilesRequestBodyIds
    The ids of the wireless profile to assign to the given camera
    """
    
    backup: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup') }})
    primary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    secondary: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondary') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceCameraWirelessProfilesRequestBody:
    ids: UpdateDeviceCameraWirelessProfilesRequestBodyIds = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    

@dataclasses.dataclass
class UpdateDeviceCameraWirelessProfilesRequest:
    path_params: UpdateDeviceCameraWirelessProfilesPathParams = dataclasses.field()
    request: UpdateDeviceCameraWirelessProfilesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDeviceCameraWirelessProfilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_device_camera_wireless_profiles_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
