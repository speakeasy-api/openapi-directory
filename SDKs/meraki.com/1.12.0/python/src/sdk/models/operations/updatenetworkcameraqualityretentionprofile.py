import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class UpdateNetworkCameraQualityRetentionProfilePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    quality_retention_profile_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'qualityRetentionProfileId', 'style': 'simple', 'explode': False }})
    
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"
    ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080 = "1920x1080"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72:
    r"""UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72
    Quality and resolution for MV12/MV22/MV72 camera models.
    """
    
    quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"
    ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080 = "1920x1080"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We:
    r"""UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We
    Quality and resolution for MV12WE camera models.
    """
    
    quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71:
    r"""UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71
    Quality and resolution for MV21/MV71 camera models.
    """
    
    quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"
    ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080 = "1920x1080"
    TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512 = "2688x1512"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X:
    r"""UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X
    Quality and resolution for MV22X/MV72X camera models.
    """
    
    quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum(str, Enum):
    ONE_THOUSAND_AND_EIGHTYX1080 = "1080x1080"
    TWO_THOUSAND_AND_FIFTY_EIGHTX2058 = "2058x2058"


@dataclass_json
@dataclasses.dataclass
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32:
    r"""UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32
    Quality and resolution for MV32 camera models.
    """
    
    quality: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    resolution: UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings:
    r"""UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings
    Video quality and resolution settings for all the camera models.
    """
    
    mv12_mv22_mv72: Optional[UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MV12/MV22/MV72') }})
    mv12_we: Optional[UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MV12WE') }})
    mv21_mv71: Optional[UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MV21/MV71') }})
    mv22_x_mv72_x: Optional[UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MV22X/MV72X') }})
    mv32: Optional[UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MV32') }})
    

@dataclass_json
@dataclasses.dataclass
class UpdateNetworkCameraQualityRetentionProfileRequestBody:
    audio_recording_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioRecordingEnabled') }})
    cloud_archive_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudArchiveEnabled') }})
    max_retention_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetentionDays') }})
    motion_based_retention_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('motionBasedRetentionEnabled') }})
    motion_detector_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('motionDetectorVersion') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    restricted_bandwidth_mode_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedBandwidthModeEnabled') }})
    schedule_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleId') }})
    video_settings: Optional[UpdateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoSettings') }})
    

@dataclasses.dataclass
class UpdateNetworkCameraQualityRetentionProfileRequest:
    path_params: UpdateNetworkCameraQualityRetentionProfilePathParams = dataclasses.field()
    request: Optional[UpdateNetworkCameraQualityRetentionProfileRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateNetworkCameraQualityRetentionProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    update_network_camera_quality_retention_profile_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
