import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvideointelligencev1p3beta1_videocontext as shared_googlecloudvideointelligencev1p3beta1_videocontext

class GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum(str, Enum):
    FEATURE_UNSPECIFIED = "FEATURE_UNSPECIFIED"
    LABEL_DETECTION = "LABEL_DETECTION"
    SHOT_CHANGE_DETECTION = "SHOT_CHANGE_DETECTION"
    EXPLICIT_CONTENT_DETECTION = "EXPLICIT_CONTENT_DETECTION"
    FACE_DETECTION = "FACE_DETECTION"
    SPEECH_TRANSCRIPTION = "SPEECH_TRANSCRIPTION"
    TEXT_DETECTION = "TEXT_DETECTION"
    OBJECT_TRACKING = "OBJECT_TRACKING"
    LOGO_RECOGNITION = "LOGO_RECOGNITION"
    CELEBRITY_RECOGNITION = "CELEBRITY_RECOGNITION"
    PERSON_DETECTION = "PERSON_DETECTION"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequest:
    r"""GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequest
    Video annotation request.
    """
    
    features: Optional[list[GoogleCloudVideointelligenceV1p3beta1AnnotateVideoRequestFeaturesEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    input_content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputContent') }})
    input_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputUri') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    output_uri: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputUri') }})
    video_context: Optional[shared_googlecloudvideointelligencev1p3beta1_videocontext.GoogleCloudVideointelligenceV1p3beta1VideoContext] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoContext') }})
    
