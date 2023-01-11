import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseries as shared_googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseries
from ..shared import googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats as shared_googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1CalculateStatsResponse:
    r"""GoogleCloudContactcenterinsightsV1CalculateStatsResponse
    The response for calculating conversation statistics.
    """
    
    average_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageDuration') }})
    average_turn_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageTurnCount') }})
    conversation_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationCount') }})
    conversation_count_time_series: Optional[shared_googlecloudcontactcenterinsightsv1calculatestatsresponsetimeseries.GoogleCloudContactcenterinsightsV1CalculateStatsResponseTimeSeries] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversationCountTimeSeries') }})
    custom_highlighter_matches: Optional[dict[str, int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customHighlighterMatches') }})
    issue_matches: Optional[dict[str, int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueMatches') }})
    issue_matches_stats: Optional[dict[str, shared_googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats.GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueMatchesStats') }})
    smart_highlighter_matches: Optional[dict[str, int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smartHighlighterMatches') }})
    
