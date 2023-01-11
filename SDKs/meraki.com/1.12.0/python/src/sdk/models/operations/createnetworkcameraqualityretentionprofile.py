import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclasses.dataclass
class CreateNetworkCameraQualityRetentionProfilePathParams:
    network_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'networkId', 'style': 'simple', 'explode': False }})
    
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"
    ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080 = "1920x1080"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72:
    r"""CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72
    Quality and resolution for MV12/MV22/MV72 camera models.
    """
    
    quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72QualityEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72ResolutionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"
    ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080 = "1920x1080"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We:
    r"""CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We
    Quality and resolution for MV12WE camera models.
    """
    
    quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeQualityEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12WeResolutionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71:
    r"""CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71
    Quality and resolution for MV21/MV71 camera models.
    """
    
    quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71QualityEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71ResolutionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum(str, Enum):
    ONE_THOUSAND_TWO_HUNDRED_AND_EIGHTYX720 = "1280x720"
    ONE_THOUSAND_NINE_HUNDRED_AND_TWENTYX1080 = "1920x1080"
    TWO_THOUSAND_SIX_HUNDRED_AND_EIGHTY_EIGHTX1512 = "2688x1512"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X:
    r"""CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X
    Quality and resolution for MV22X/MV72X camera models.
    """
    
    quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XQualityEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72XResolutionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum(str, Enum):
    STANDARD = "Standard"
    ENHANCED = "Enhanced"
    HIGH = "High"

class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum(str, Enum):
    ONE_THOUSAND_AND_EIGHTYX1080 = "1080x1080"
    TWO_THOUSAND_AND_FIFTY_EIGHTX2058 = "2058x2058"


@dataclass_json
@dataclasses.dataclass
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32:
    r"""CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32
    Quality and resolution for MV32 camera models.
    """
    
    quality: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32QualityEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality') }})
    resolution: CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32ResolutionEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings:
    r"""CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings
    Video quality and resolution settings for all the camera models.
    """
    
    mv12_mv22_mv72: Optional[CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12Mv22Mv72] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MV12/MV22/MV72') }})
    mv12_we: Optional[CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv12We] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MV12WE') }})
    mv21_mv71: Optional[CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv21Mv71] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MV21/MV71') }})
    mv22_x_mv72_x: Optional[CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv22XMv72X] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MV22X/MV72X') }})
    mv32: Optional[CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettingsMv32] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MV32') }})
    

@dataclass_json
@dataclasses.dataclass
class CreateNetworkCameraQualityRetentionProfileRequestBody:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    audio_recording_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioRecordingEnabled') }})
    cloud_archive_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cloudArchiveEnabled') }})
    max_retention_days: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRetentionDays') }})
    motion_based_retention_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('motionBasedRetentionEnabled') }})
    motion_detector_version: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('motionDetectorVersion') }})
    restricted_bandwidth_mode_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictedBandwidthModeEnabled') }})
    schedule_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleId') }})
    video_settings: Optional[CreateNetworkCameraQualityRetentionProfileRequestBodyVideoSettings] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoSettings') }})
    

@dataclasses.dataclass
class CreateNetworkCameraQualityRetentionProfileRequest:
    path_params: CreateNetworkCameraQualityRetentionProfilePathParams = dataclasses.field()
    request: CreateNetworkCameraQualityRetentionProfileRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateNetworkCameraQualityRetentionProfileResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_network_camera_quality_retention_profile_200_application_json_object: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
