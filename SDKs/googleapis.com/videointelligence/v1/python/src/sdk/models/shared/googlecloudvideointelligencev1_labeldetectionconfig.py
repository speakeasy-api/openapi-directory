import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum(str, Enum):
    LABEL_DETECTION_MODE_UNSPECIFIED = "LABEL_DETECTION_MODE_UNSPECIFIED"
    SHOT_MODE = "SHOT_MODE"
    FRAME_MODE = "FRAME_MODE"
    SHOT_AND_FRAME_MODE = "SHOT_AND_FRAME_MODE"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVideointelligenceV1LabelDetectionConfig:
    r"""GoogleCloudVideointelligenceV1LabelDetectionConfig
    Config for LABEL_DETECTION.
    """
    
    frame_confidence_threshold: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameConfidenceThreshold') }})
    label_detection_mode: Optional[GoogleCloudVideointelligenceV1LabelDetectionConfigLabelDetectionModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelDetectionMode') }})
    model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    stationary_camera: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stationaryCamera') }})
    video_confidence_threshold: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoConfidenceThreshold') }})
    
