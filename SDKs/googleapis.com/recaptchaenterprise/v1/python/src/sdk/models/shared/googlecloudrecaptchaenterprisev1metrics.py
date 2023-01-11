import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecaptchaenterprisev1challengemetrics as shared_googlecloudrecaptchaenterprisev1challengemetrics
from ..shared import googlecloudrecaptchaenterprisev1scoremetrics as shared_googlecloudrecaptchaenterprisev1scoremetrics


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1Metrics:
    r"""GoogleCloudRecaptchaenterpriseV1Metrics
    Metrics for a single Key.
    """
    
    challenge_metrics: Optional[list[shared_googlecloudrecaptchaenterprisev1challengemetrics.GoogleCloudRecaptchaenterpriseV1ChallengeMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challengeMetrics') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    score_metrics: Optional[list[shared_googlecloudrecaptchaenterprisev1scoremetrics.GoogleCloudRecaptchaenterpriseV1ScoreMetrics]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreMetrics') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    
