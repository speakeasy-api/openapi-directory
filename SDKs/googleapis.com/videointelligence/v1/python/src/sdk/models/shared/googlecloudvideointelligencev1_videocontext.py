import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvideointelligencev1_explicitcontentdetectionconfig as shared_googlecloudvideointelligencev1_explicitcontentdetectionconfig
from ..shared import googlecloudvideointelligencev1_facedetectionconfig as shared_googlecloudvideointelligencev1_facedetectionconfig
from ..shared import googlecloudvideointelligencev1_labeldetectionconfig as shared_googlecloudvideointelligencev1_labeldetectionconfig
from ..shared import googlecloudvideointelligencev1_objecttrackingconfig as shared_googlecloudvideointelligencev1_objecttrackingconfig
from ..shared import googlecloudvideointelligencev1_persondetectionconfig as shared_googlecloudvideointelligencev1_persondetectionconfig
from ..shared import googlecloudvideointelligencev1_videosegment as shared_googlecloudvideointelligencev1_videosegment
from ..shared import googlecloudvideointelligencev1_shotchangedetectionconfig as shared_googlecloudvideointelligencev1_shotchangedetectionconfig
from ..shared import googlecloudvideointelligencev1_speechtranscriptionconfig as shared_googlecloudvideointelligencev1_speechtranscriptionconfig
from ..shared import googlecloudvideointelligencev1_textdetectionconfig as shared_googlecloudvideointelligencev1_textdetectionconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVideointelligenceV1VideoContext:
    r"""GoogleCloudVideointelligenceV1VideoContext
    Video context and/or feature-specific parameters.
    """
    
    explicit_content_detection_config: Optional[shared_googlecloudvideointelligencev1_explicitcontentdetectionconfig.GoogleCloudVideointelligenceV1ExplicitContentDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicitContentDetectionConfig') }})
    face_detection_config: Optional[shared_googlecloudvideointelligencev1_facedetectionconfig.GoogleCloudVideointelligenceV1FaceDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faceDetectionConfig') }})
    label_detection_config: Optional[shared_googlecloudvideointelligencev1_labeldetectionconfig.GoogleCloudVideointelligenceV1LabelDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelDetectionConfig') }})
    object_tracking_config: Optional[shared_googlecloudvideointelligencev1_objecttrackingconfig.GoogleCloudVideointelligenceV1ObjectTrackingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTrackingConfig') }})
    person_detection_config: Optional[shared_googlecloudvideointelligencev1_persondetectionconfig.GoogleCloudVideointelligenceV1PersonDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personDetectionConfig') }})
    segments: Optional[list[shared_googlecloudvideointelligencev1_videosegment.GoogleCloudVideointelligenceV1VideoSegment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    shot_change_detection_config: Optional[shared_googlecloudvideointelligencev1_shotchangedetectionconfig.GoogleCloudVideointelligenceV1ShotChangeDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shotChangeDetectionConfig') }})
    speech_transcription_config: Optional[shared_googlecloudvideointelligencev1_speechtranscriptionconfig.GoogleCloudVideointelligenceV1SpeechTranscriptionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speechTranscriptionConfig') }})
    text_detection_config: Optional[shared_googlecloudvideointelligencev1_textdetectionconfig.GoogleCloudVideointelligenceV1TextDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textDetectionConfig') }})
    
