import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvideointelligencev1beta2_explicitcontentdetectionconfig as shared_googlecloudvideointelligencev1beta2_explicitcontentdetectionconfig
from ..shared import googlecloudvideointelligencev1beta2_facedetectionconfig as shared_googlecloudvideointelligencev1beta2_facedetectionconfig
from ..shared import googlecloudvideointelligencev1beta2_labeldetectionconfig as shared_googlecloudvideointelligencev1beta2_labeldetectionconfig
from ..shared import googlecloudvideointelligencev1beta2_objecttrackingconfig as shared_googlecloudvideointelligencev1beta2_objecttrackingconfig
from ..shared import googlecloudvideointelligencev1beta2_persondetectionconfig as shared_googlecloudvideointelligencev1beta2_persondetectionconfig
from ..shared import googlecloudvideointelligencev1beta2_videosegment as shared_googlecloudvideointelligencev1beta2_videosegment
from ..shared import googlecloudvideointelligencev1beta2_shotchangedetectionconfig as shared_googlecloudvideointelligencev1beta2_shotchangedetectionconfig
from ..shared import googlecloudvideointelligencev1beta2_speechtranscriptionconfig as shared_googlecloudvideointelligencev1beta2_speechtranscriptionconfig
from ..shared import googlecloudvideointelligencev1beta2_textdetectionconfig as shared_googlecloudvideointelligencev1beta2_textdetectionconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVideointelligenceV1beta2VideoContext:
    r"""GoogleCloudVideointelligenceV1beta2VideoContext
    Video context and/or feature-specific parameters.
    """
    
    explicit_content_detection_config: Optional[shared_googlecloudvideointelligencev1beta2_explicitcontentdetectionconfig.GoogleCloudVideointelligenceV1beta2ExplicitContentDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicitContentDetectionConfig') }})
    face_detection_config: Optional[shared_googlecloudvideointelligencev1beta2_facedetectionconfig.GoogleCloudVideointelligenceV1beta2FaceDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faceDetectionConfig') }})
    label_detection_config: Optional[shared_googlecloudvideointelligencev1beta2_labeldetectionconfig.GoogleCloudVideointelligenceV1beta2LabelDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelDetectionConfig') }})
    object_tracking_config: Optional[shared_googlecloudvideointelligencev1beta2_objecttrackingconfig.GoogleCloudVideointelligenceV1beta2ObjectTrackingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTrackingConfig') }})
    person_detection_config: Optional[shared_googlecloudvideointelligencev1beta2_persondetectionconfig.GoogleCloudVideointelligenceV1beta2PersonDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personDetectionConfig') }})
    segments: Optional[list[shared_googlecloudvideointelligencev1beta2_videosegment.GoogleCloudVideointelligenceV1beta2VideoSegment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    shot_change_detection_config: Optional[shared_googlecloudvideointelligencev1beta2_shotchangedetectionconfig.GoogleCloudVideointelligenceV1beta2ShotChangeDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shotChangeDetectionConfig') }})
    speech_transcription_config: Optional[shared_googlecloudvideointelligencev1beta2_speechtranscriptionconfig.GoogleCloudVideointelligenceV1beta2SpeechTranscriptionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speechTranscriptionConfig') }})
    text_detection_config: Optional[shared_googlecloudvideointelligencev1beta2_textdetectionconfig.GoogleCloudVideointelligenceV1beta2TextDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textDetectionConfig') }})
    
