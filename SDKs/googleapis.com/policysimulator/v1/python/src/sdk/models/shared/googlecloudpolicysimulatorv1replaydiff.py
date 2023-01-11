import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpolicysimulatorv1accessstatediff as shared_googlecloudpolicysimulatorv1accessstatediff


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicysimulatorV1ReplayDiff:
    r"""GoogleCloudPolicysimulatorV1ReplayDiff
    The difference between the results of evaluating an access tuple under the current (baseline) policies and under the proposed (simulated) policies. This difference explains how a principal's access could change if the proposed policies were applied.
    """
    
    access_diff: Optional[shared_googlecloudpolicysimulatorv1accessstatediff.GoogleCloudPolicysimulatorV1AccessStateDiff] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessDiff') }})
    
