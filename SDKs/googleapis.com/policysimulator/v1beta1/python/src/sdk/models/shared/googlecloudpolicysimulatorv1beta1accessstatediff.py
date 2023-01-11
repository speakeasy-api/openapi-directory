import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpolicysimulatorv1beta1explainedaccess as shared_googlecloudpolicysimulatorv1beta1explainedaccess

class GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum(str, Enum):
    ACCESS_CHANGE_TYPE_UNSPECIFIED = "ACCESS_CHANGE_TYPE_UNSPECIFIED"
    NO_CHANGE = "NO_CHANGE"
    UNKNOWN_CHANGE = "UNKNOWN_CHANGE"
    ACCESS_REVOKED = "ACCESS_REVOKED"
    ACCESS_GAINED = "ACCESS_GAINED"
    ACCESS_MAYBE_REVOKED = "ACCESS_MAYBE_REVOKED"
    ACCESS_MAYBE_GAINED = "ACCESS_MAYBE_GAINED"


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicysimulatorV1beta1AccessStateDiff:
    r"""GoogleCloudPolicysimulatorV1beta1AccessStateDiff
    A summary and comparison of the member's access under the current (baseline) policies and the proposed (simulated) policies for a single access tuple.
    """
    
    access_change: Optional[GoogleCloudPolicysimulatorV1beta1AccessStateDiffAccessChangeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessChange') }})
    baseline: Optional[shared_googlecloudpolicysimulatorv1beta1explainedaccess.GoogleCloudPolicysimulatorV1beta1ExplainedAccess] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baseline') }})
    simulated: Optional[shared_googlecloudpolicysimulatorv1beta1explainedaccess.GoogleCloudPolicysimulatorV1beta1ExplainedAccess] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulated') }})
    
