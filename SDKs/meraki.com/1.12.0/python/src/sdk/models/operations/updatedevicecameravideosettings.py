import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateDeviceCameraVideoSettingsPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateDeviceCameraVideoSettingsRequestBody:
    external_rtsp_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalRtspEnabled') }})
    

@dataclasses.dataclass
class UpdateDeviceCameraVideoSettingsRequest:
    path_params: UpdateDeviceCameraVideoSettingsPathParams = dataclasses.field()
    request: Optional[UpdateDeviceCameraVideoSettingsRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDeviceCameraVideoSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_device_camera_video_settings_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
