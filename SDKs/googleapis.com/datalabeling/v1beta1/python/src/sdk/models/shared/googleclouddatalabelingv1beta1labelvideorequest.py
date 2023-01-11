import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1humanannotationconfig as shared_googleclouddatalabelingv1beta1humanannotationconfig
from ..shared import googleclouddatalabelingv1beta1eventconfig as shared_googleclouddatalabelingv1beta1eventconfig
from ..shared import googleclouddatalabelingv1beta1objectdetectionconfig as shared_googleclouddatalabelingv1beta1objectdetectionconfig
from ..shared import googleclouddatalabelingv1beta1objecttrackingconfig as shared_googleclouddatalabelingv1beta1objecttrackingconfig
from ..shared import googleclouddatalabelingv1beta1videoclassificationconfig as shared_googleclouddatalabelingv1beta1videoclassificationconfig

class GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum(str, Enum):
    FEATURE_UNSPECIFIED = "FEATURE_UNSPECIFIED"
    CLASSIFICATION = "CLASSIFICATION"
    OBJECT_DETECTION = "OBJECT_DETECTION"
    OBJECT_TRACKING = "OBJECT_TRACKING"
    EVENT = "EVENT"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1LabelVideoRequest:
    r"""GoogleCloudDatalabelingV1beta1LabelVideoRequest
    Request message for LabelVideo.
    """
    
    basic_config: Optional[shared_googleclouddatalabelingv1beta1humanannotationconfig.GoogleCloudDatalabelingV1beta1HumanAnnotationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('basicConfig') }})
    event_config: Optional[shared_googleclouddatalabelingv1beta1eventconfig.GoogleCloudDatalabelingV1beta1EventConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventConfig') }})
    feature: Optional[GoogleCloudDatalabelingV1beta1LabelVideoRequestFeatureEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('feature') }})
    object_detection_config: Optional[shared_googleclouddatalabelingv1beta1objectdetectionconfig.GoogleCloudDatalabelingV1beta1ObjectDetectionConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectDetectionConfig') }})
    object_tracking_config: Optional[shared_googleclouddatalabelingv1beta1objecttrackingconfig.GoogleCloudDatalabelingV1beta1ObjectTrackingConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectTrackingConfig') }})
    video_classification_config: Optional[shared_googleclouddatalabelingv1beta1videoclassificationconfig.GoogleCloudDatalabelingV1beta1VideoClassificationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videoClassificationConfig') }})
    
