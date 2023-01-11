import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1example as shared_googleclouddatalabelingv1beta1example


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ExampleComparison:
    r"""GoogleCloudDatalabelingV1beta1ExampleComparison
    Example comparisons comparing ground truth output and predictions for a specific input.
    """
    
    ground_truth_example: Optional[shared_googleclouddatalabelingv1beta1example.GoogleCloudDatalabelingV1beta1Example] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groundTruthExample') }})
    model_created_examples: Optional[list[shared_googleclouddatalabelingv1beta1example.GoogleCloudDatalabelingV1beta1Example]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelCreatedExamples') }})
    
