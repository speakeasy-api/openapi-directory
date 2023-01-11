import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1classificationmetrics as shared_googleclouddatalabelingv1beta1classificationmetrics
from ..shared import googleclouddatalabelingv1beta1objectdetectionmetrics as shared_googleclouddatalabelingv1beta1objectdetectionmetrics


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1EvaluationMetrics:
    classification_metrics: Optional[shared_googleclouddatalabelingv1beta1classificationmetrics.GoogleCloudDatalabelingV1beta1ClassificationMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationMetrics') }})
    object_detection_metrics: Optional[shared_googleclouddatalabelingv1beta1objectdetectionmetrics.GoogleCloudDatalabelingV1beta1ObjectDetectionMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectDetectionMetrics') }})
    
