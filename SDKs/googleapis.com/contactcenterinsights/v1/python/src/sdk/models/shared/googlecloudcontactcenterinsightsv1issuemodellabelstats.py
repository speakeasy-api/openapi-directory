import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats as shared_googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1IssueModelLabelStats:
    r"""GoogleCloudContactcenterinsightsV1IssueModelLabelStats
    Aggregated statistics about an issue model.
    """
    
    analyzed_conversations_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('analyzedConversationsCount') }})
    issue_stats: Optional[dict[str, shared_googlecloudcontactcenterinsightsv1issuemodellabelstatsissuestats.GoogleCloudContactcenterinsightsV1IssueModelLabelStatsIssueStats]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueStats') }})
    unclassified_conversations_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unclassifiedConversationsCount') }})
    
