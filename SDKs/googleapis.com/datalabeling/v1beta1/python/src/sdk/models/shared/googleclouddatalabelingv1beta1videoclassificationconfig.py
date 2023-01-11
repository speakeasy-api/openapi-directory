import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1annotationspecsetconfig as shared_googleclouddatalabelingv1beta1annotationspecsetconfig


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1VideoClassificationConfig:
    r"""GoogleCloudDatalabelingV1beta1VideoClassificationConfig
    Config for video classification human labeling task. Currently two types of video classification are supported: 1. Assign labels on the entire video. 2. Split the video into multiple video clips based on camera shot, and assign labels on each video clip.
    """
    
    annotation_spec_set_configs: Optional[list[shared_googleclouddatalabelingv1beta1annotationspecsetconfig.GoogleCloudDatalabelingV1beta1AnnotationSpecSetConfig]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecSetConfigs') }})
    apply_shot_detection: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyShotDetection') }})
    
