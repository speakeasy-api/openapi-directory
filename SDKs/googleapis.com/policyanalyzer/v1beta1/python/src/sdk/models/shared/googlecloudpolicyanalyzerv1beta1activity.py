import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpolicyanalyzerv1beta1observationperiod as shared_googlecloudpolicyanalyzerv1beta1observationperiod


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicyanalyzerV1beta1Activity:
    activity: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity') }})
    activity_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityType') }})
    full_resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullResourceName') }})
    observation_period: Optional[shared_googlecloudpolicyanalyzerv1beta1observationperiod.GoogleCloudPolicyanalyzerV1beta1ObservationPeriod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observationPeriod') }})
    
