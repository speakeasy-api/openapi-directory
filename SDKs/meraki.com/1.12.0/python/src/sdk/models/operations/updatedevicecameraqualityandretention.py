import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateDeviceCameraQualityAndRetentionPathParams:
    serial: str = dataclasses.field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum(str, Enum):
    STANDARD = "Standard"
    HIGH = "High"
    ENHANCED = "Enhanced"

class UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"
    ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080 = "1920x1080"
    ONE_THOUSAND_AND_EIGHTYX1080 = "1080x1080"
    TWO_THOUSAND_AND_FIFTY_EIGHTX2058 = "2058x2058"


@dataclass_json
@dataclasses.dataclass
class UpdateDeviceCameraQualityAndRetentionRequestBody:
    audio_recording_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioRecordingEnabled') }})
    motion_based_retention_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('motionBasedRetentionEnabled') }})
    motion_detector_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('motionDetectorVersion') }})
    profile_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileId') }})
    quality: Optional[UpdateDeviceCameraQualityAndRetentionRequestBodyQualityEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    resolution: Optional[UpdateDeviceCameraQualityAndRetentionRequestBodyResolutionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    restricted_bandwidth_mode_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedBandwidthModeEnabled') }})
    

@dataclasses.dataclass
class UpdateDeviceCameraQualityAndRetentionRequest:
    path_params: UpdateDeviceCameraQualityAndRetentionPathParams = dataclasses.field()
    request: Optional[UpdateDeviceCameraQualityAndRetentionRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateDeviceCameraQualityAndRetentionResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_device_camera_quality_and_retention_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
