"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

from __future__ import annotations
import dataclasses
from ..shared import googleclouddatalabelingv1beta1attempt as shared_googleclouddatalabelingv1beta1attempt
from ..shared import googleclouddatalabelingv1beta1evaluationjobconfig as shared_googleclouddatalabelingv1beta1evaluationjobconfig
from dataclasses_json import Undefined, dataclass_json
from enum import Enum
from sdk import utils
from typing import Optional

class GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum(str, Enum):
    r"""Output only. Describes the current state of the job."""
    STATE_UNSPECIFIED = 'STATE_UNSPECIFIED'
    SCHEDULED = 'SCHEDULED'
    RUNNING = 'RUNNING'
    PAUSED = 'PAUSED'
    STOPPED = 'STOPPED'


@dataclass_json(undefined=Undefined.EXCLUDE)
@dataclasses.dataclass
class GoogleCloudDatalabelingV1beta1EvaluationJob:
    r"""Defines an evaluation job that runs periodically to generate Evaluations. [Creating an evaluation job](/ml-engine/docs/continuous-evaluation/create-job) is the starting point for using continuous evaluation."""
    
    annotation_spec_set: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('annotationSpecSet'), 'exclude': lambda f: f is None }})
    r"""Required. Name of the AnnotationSpecSet describing all the labels that your machine learning model outputs. You must create this resource before you create an evaluation job and provide its name in the following format: \\"projects/{project_id}/annotationSpecSets/{annotation_spec_set_id}\\" """  
    attempts: Optional[list[shared_googleclouddatalabelingv1beta1attempt.GoogleCloudDatalabelingV1beta1Attempt]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('attempts'), 'exclude': lambda f: f is None }})
    r"""Output only. Every time the evaluation job runs and an error occurs, the failed attempt is appended to this array."""  
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('createTime'), 'exclude': lambda f: f is None }})
    r"""Output only. Timestamp of when this evaluation job was created."""  
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('description'), 'exclude': lambda f: f is None }})
    r"""Required. Description of the job. The description can be up to 25,000 characters long."""  
    evaluation_job_config: Optional[shared_googleclouddatalabelingv1beta1evaluationjobconfig.GoogleCloudDatalabelingV1beta1EvaluationJobConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('evaluationJobConfig'), 'exclude': lambda f: f is None }})
    r"""Configures specific details of how a continuous evaluation job works. Provide this configuration when you create an EvaluationJob."""  
    label_missing_ground_truth: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('labelMissingGroundTruth'), 'exclude': lambda f: f is None }})
    r"""Required. Whether you want Data Labeling Service to provide ground truth labels for prediction input. If you want the service to assign human labelers to annotate your data, set this to `true`. If you want to provide your own ground truth labels in the evaluation job's BigQuery table, set this to `false`."""  
    model_version: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('modelVersion'), 'exclude': lambda f: f is None }})
    r"""Required. The [AI Platform Prediction model version](/ml-engine/docs/prediction-overview) to be evaluated. Prediction input and output is sampled from this model version. When creating an evaluation job, specify the model version in the following format: \\"projects/{project_id}/models/{model_name}/versions/{version_name}\\" There can only be one evaluation job per model version."""  
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('name'), 'exclude': lambda f: f is None }})
    r"""Output only. After you create a job, Data Labeling Service assigns a name to the job with the following format: \\"projects/{project_id}/evaluationJobs/ {evaluation_job_id}\\" """  
    schedule: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('schedule'), 'exclude': lambda f: f is None }})
    r"""Required. Describes the interval at which the job runs. This interval must be at least 1 day, and it is rounded to the nearest day. For example, if you specify a 50-hour interval, the job runs every 2 days. You can provide the schedule in [crontab format](/scheduler/docs/configuring/cron-job-schedules) or in an [English-like format](/appengine/docs/standard/python/config/cronref#schedule_format). Regardless of what you specify, the job will run at 10:00 AM UTC. Only the interval from this schedule is used, not the specific time of day."""  
    state: Optional[GoogleCloudDatalabelingV1beta1EvaluationJobStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.get_field_name('state'), 'exclude': lambda f: f is None }})
    r"""Output only. Describes the current state of the job."""  
    