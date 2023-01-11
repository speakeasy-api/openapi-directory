import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpolicysimulatorv1replayconfig as shared_googlecloudpolicysimulatorv1replayconfig
from ..shared import googlecloudpolicysimulatorv1replayresultssummary as shared_googlecloudpolicysimulatorv1replayresultssummary


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicysimulatorV1ReplayInput:
    r"""GoogleCloudPolicysimulatorV1ReplayInput
    A resource describing a `Replay`, or simulation.
    """
    
    config: Optional[shared_googlecloudpolicysimulatorv1replayconfig.GoogleCloudPolicysimulatorV1ReplayConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    results_summary: Optional[shared_googlecloudpolicysimulatorv1replayresultssummary.GoogleCloudPolicysimulatorV1ReplayResultsSummary] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultsSummary') }})
    
