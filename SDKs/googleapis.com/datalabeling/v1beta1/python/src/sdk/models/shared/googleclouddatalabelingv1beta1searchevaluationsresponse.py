import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1evaluation as shared_googleclouddatalabelingv1beta1evaluation


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse:
    r"""GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse
    Results of searching evaluations.
    """
    
    evaluations: Optional[list[shared_googleclouddatalabelingv1beta1evaluation.GoogleCloudDatalabelingV1beta1Evaluation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluations') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
