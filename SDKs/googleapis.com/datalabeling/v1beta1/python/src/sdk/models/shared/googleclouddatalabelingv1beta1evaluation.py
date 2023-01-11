import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1evaluationconfig as shared_googleclouddatalabelingv1beta1evaluationconfig
from ..shared import googleclouddatalabelingv1beta1evaluationmetrics as shared_googleclouddatalabelingv1beta1evaluationmetrics

class GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum(str, Enum):
    ANNOTATION_TYPE_UNSPECIFIED = "ANNOTATION_TYPE_UNSPECIFIED"
    IMAGE_CLASSIFICATION_ANNOTATION = "IMAGE_CLASSIFICATION_ANNOTATION"
    IMAGE_BOUNDING_BOX_ANNOTATION = "IMAGE_BOUNDING_BOX_ANNOTATION"
    IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION = "IMAGE_ORIENTED_BOUNDING_BOX_ANNOTATION"
    IMAGE_BOUNDING_POLY_ANNOTATION = "IMAGE_BOUNDING_POLY_ANNOTATION"
    IMAGE_POLYLINE_ANNOTATION = "IMAGE_POLYLINE_ANNOTATION"
    IMAGE_SEGMENTATION_ANNOTATION = "IMAGE_SEGMENTATION_ANNOTATION"
    VIDEO_SHOTS_CLASSIFICATION_ANNOTATION = "VIDEO_SHOTS_CLASSIFICATION_ANNOTATION"
    VIDEO_OBJECT_TRACKING_ANNOTATION = "VIDEO_OBJECT_TRACKING_ANNOTATION"
    VIDEO_OBJECT_DETECTION_ANNOTATION = "VIDEO_OBJECT_DETECTION_ANNOTATION"
    VIDEO_EVENT_ANNOTATION = "VIDEO_EVENT_ANNOTATION"
    TEXT_CLASSIFICATION_ANNOTATION = "TEXT_CLASSIFICATION_ANNOTATION"
    TEXT_ENTITY_EXTRACTION_ANNOTATION = "TEXT_ENTITY_EXTRACTION_ANNOTATION"
    GENERAL_CLASSIFICATION_ANNOTATION = "GENERAL_CLASSIFICATION_ANNOTATION"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1Evaluation:
    r"""GoogleCloudDatalabelingV1beta1Evaluation
    Describes an evaluation between a machine learning model's predictions and ground truth labels. Created when an EvaluationJob runs successfully.
    """
    
    annotation_type: Optional[GoogleCloudDatalabelingV1beta1EvaluationAnnotationTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationType') }})
    config: Optional[shared_googleclouddatalabelingv1beta1evaluationconfig.GoogleCloudDatalabelingV1beta1EvaluationConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    evaluated_item_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluatedItemCount') }})
    evaluation_job_run_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationJobRunTime') }})
    evaluation_metrics: Optional[shared_googleclouddatalabelingv1beta1evaluationmetrics.GoogleCloudDatalabelingV1beta1EvaluationMetrics] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationMetrics') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
