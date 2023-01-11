import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudvideointelligencev1p3beta1_explicitcontentdetectionconfig as shared_googlecloudvideointelligencev1p3beta1_explicitcontentdetectionconfig
from ..shared import googlecloudvideointelligencev1p3beta1_facedetectionconfig as shared_googlecloudvideointelligencev1p3beta1_facedetectionconfig
from ..shared import googlecloudvideointelligencev1p3beta1_labeldetectionconfig as shared_googlecloudvideointelligencev1p3beta1_labeldetectionconfig
from ..shared import googlecloudvideointelligencev1p3beta1_objecttrackingconfig as shared_googlecloudvideointelligencev1p3beta1_objecttrackingconfig
from ..shared import googlecloudvideointelligencev1p3beta1_persondetectionconfig as shared_googlecloudvideointelligencev1p3beta1_persondetectionconfig
from ..shared import googlecloudvideointelligencev1p3beta1_videosegment as shared_googlecloudvideointelligencev1p3beta1_videosegment
from ..shared import googlecloudvideointelligencev1p3beta1_shotchangedetectionconfig as shared_googlecloudvideointelligencev1p3beta1_shotchangedetectionconfig
from ..shared import googlecloudvideointelligencev1p3beta1_speechtranscriptionconfig as shared_googlecloudvideointelligencev1p3beta1_speechtranscriptionconfig
from ..shared import googlecloudvideointelligencev1p3beta1_textdetectionconfig as shared_googlecloudvideointelligencev1p3beta1_textdetectionconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudVideointelligenceV1p3beta1VideoContext:
    r"""GoogleCloudVideointelligenceV1p3beta1VideoContext
    Video context and/or feature-specific parameters.
    """
    
    explicit_content_detection_config: Optional[shared_googlecloudvideointelligencev1p3beta1_explicitcontentdetectionconfig.GoogleCloudVideointelligenceV1p3beta1ExplicitContentDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explicitContentDetectionConfig') }})
    face_detection_config: Optional[shared_googlecloudvideointelligencev1p3beta1_facedetectionconfig.GoogleCloudVideointelligenceV1p3beta1FaceDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faceDetectionConfig') }})
    label_detection_config: Optional[shared_googlecloudvideointelligencev1p3beta1_labeldetectionconfig.GoogleCloudVideointelligenceV1p3beta1LabelDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelDetectionConfig') }})
    object_tracking_config: Optional[shared_googlecloudvideointelligencev1p3beta1_objecttrackingconfig.GoogleCloudVideointelligenceV1p3beta1ObjectTrackingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTrackingConfig') }})
    person_detection_config: Optional[shared_googlecloudvideointelligencev1p3beta1_persondetectionconfig.GoogleCloudVideointelligenceV1p3beta1PersonDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personDetectionConfig') }})
    segments: Optional[list[shared_googlecloudvideointelligencev1p3beta1_videosegment.GoogleCloudVideointelligenceV1p3beta1VideoSegment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    shot_change_detection_config: Optional[shared_googlecloudvideointelligencev1p3beta1_shotchangedetectionconfig.GoogleCloudVideointelligenceV1p3beta1ShotChangeDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shotChangeDetectionConfig') }})
    speech_transcription_config: Optional[shared_googlecloudvideointelligencev1p3beta1_speechtranscriptionconfig.GoogleCloudVideointelligenceV1p3beta1SpeechTranscriptionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speechTranscriptionConfig') }})
    text_detection_config: Optional[shared_googlecloudvideointelligencev1p3beta1_textdetectionconfig.GoogleCloudVideointelligenceV1p3beta1TextDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textDetectionConfig') }})
    
