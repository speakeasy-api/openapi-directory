import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleclouddatalabelingv1beta1attempt as shared_googleclouddatalabelingv1beta1attempt
from ..shared import googleclouddatalabelingv1beta1evaluationjobconfig as shared_googleclouddatalabelingv1beta1evaluationjobconfig

class GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    SCHEDULED = "SCHEDULED"
    RUNNING = "RUNNING"
    PAUSED = "PAUSED"
    STOPPED = "STOPPED"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1EvaluationJob:
    r"""GoogleCloudDatalabelingV1beta1EvaluationJob
    Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation.
    """
    
    annotation_spec_set: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotationSpecSet') }})
    attempts: Optional[list[shared_googleclouddatalabelingv1beta1attempt.GoogleCloudDatalabelingV1beta1Attempt]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attempts') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    evaluation_job_config: Optional[shared_googleclouddatalabelingv1beta1evaluationjobconfig.GoogleCloudDatalabelingV1beta1EvaluationJobConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationJobConfig') }})
    label_missing_ground_truth: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labelMissingGroundTruth') }})
    model_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modelVersion') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    schedule: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    state: Optional[GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
