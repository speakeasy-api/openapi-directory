import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1evaluationjob as shared_googleclouddatalabelingv1beta1evaluationjob


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse:
    r"""GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse
    Results for listing evaluation jobs.
    """
    
    evaluation_jobs: Optional[list[shared_googleclouddatalabelingv1beta1evaluationjob.GoogleCloudDatalabelingV1beta1EvaluationJob]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationJobs') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
