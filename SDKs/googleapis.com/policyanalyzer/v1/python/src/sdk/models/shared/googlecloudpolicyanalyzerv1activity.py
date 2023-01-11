import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpolicyanalyzerv1observationperiod as shared_googlecloudpolicyanalyzerv1observationperiod


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicyanalyzerV1Activity:
    activity: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity') }})
    activity_type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityType') }})
    full_resource_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fullResourceName') }})
    observation_period: Optional[shared_googlecloudpolicyanalyzerv1observationperiod.GoogleCloudPolicyanalyzerV1ObservationPeriod] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observationPeriod') }})
    
