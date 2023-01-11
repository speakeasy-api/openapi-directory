import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1evaluationjob as shared_googleclouddatalabelingv1beta1evaluationjob


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest:
    r"""GoogleCloudDatalabelingV1beta1CreateEvaluationJobRequest
    Request message for CreateEvaluationJob.
    """
    
    job: Optional[shared_googleclouddatalabelingv1beta1evaluationjob.GoogleCloudDatalabelingV1beta1EvaluationJob] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    
