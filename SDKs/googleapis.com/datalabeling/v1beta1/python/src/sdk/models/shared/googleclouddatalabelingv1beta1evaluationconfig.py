import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1boundingboxevaluationoptions as shared_googleclouddatalabelingv1beta1boundingboxevaluationoptions


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1EvaluationConfig:
    r"""GoogleCloudDatalabelingV1beta1EvaluationConfig
    Configuration details used for calculating evaluation metrics and creating an Evaluation.
    """
    
    bounding_box_evaluation_options: Optional[shared_googleclouddatalabelingv1beta1boundingboxevaluationoptions.GoogleCloudDatalabelingV1beta1BoundingBoxEvaluationOptions] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingBoxEvaluationOptions') }})
    
