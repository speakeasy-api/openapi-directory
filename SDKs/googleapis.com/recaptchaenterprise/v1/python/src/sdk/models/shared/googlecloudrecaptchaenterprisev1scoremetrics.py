import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudrecaptchaenterprisev1scoredistribution as shared_googlecloudrecaptchaenterprisev1scoredistribution


@dataclass_json
@dataclasses.dataclass
class GoogleCloudRecaptchaenterpriseV1ScoreMetrics:
    r"""GoogleCloudRecaptchaenterpriseV1ScoreMetrics
    Metrics related to scoring.
    """
    
    action_metrics: Optional[dict[str, shared_googlecloudrecaptchaenterprisev1scoredistribution.GoogleCloudRecaptchaenterpriseV1ScoreDistribution]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionMetrics') }})
    overall_metrics: Optional[shared_googlecloudrecaptchaenterprisev1scoredistribution.GoogleCloudRecaptchaenterpriseV1ScoreDistribution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overallMetrics') }})
    
