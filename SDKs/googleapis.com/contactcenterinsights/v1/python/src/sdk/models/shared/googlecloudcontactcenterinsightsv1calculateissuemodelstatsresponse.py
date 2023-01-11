import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1issuemodellabelstats as shared_googlecloudcontactcenterinsightsv1issuemodellabelstats


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse:
    r"""GoogleCloudContactcenterinsightsV1CalculateIssueModelStatsResponse
    Response of querying an issue model's statistics.
    """
    
    current_stats: Optional[shared_googlecloudcontactcenterinsightsv1issuemodellabelstats.GoogleCloudContactcenterinsightsV1IssueModelLabelStats] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentStats') }})
    
