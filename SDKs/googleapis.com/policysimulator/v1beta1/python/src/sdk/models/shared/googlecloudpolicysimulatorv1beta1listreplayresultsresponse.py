import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudpolicysimulatorv1beta1replayresult as shared_googlecloudpolicysimulatorv1beta1replayresult


@dataclass_json
@dataclasses.dataclass
class GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse:
    r"""GoogleCloudPolicysimulatorV1beta1ListReplayResultsResponse
    Response message for Simulator.ListReplayResults.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    replay_results: Optional[list[shared_googlecloudpolicysimulatorv1beta1replayresult.GoogleCloudPolicysimulatorV1beta1ReplayResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replayResults') }})
    
