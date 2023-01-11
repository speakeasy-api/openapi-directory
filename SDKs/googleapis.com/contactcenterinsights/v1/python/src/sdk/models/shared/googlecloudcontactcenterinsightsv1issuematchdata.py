import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1issueassignment as shared_googlecloudcontactcenterinsightsv1issueassignment


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1IssueMatchData:
    r"""GoogleCloudContactcenterinsightsV1IssueMatchData
    The data for an issue match annotation.
    """
    
    issue_assignment: Optional[shared_googlecloudcontactcenterinsightsv1issueassignment.GoogleCloudContactcenterinsightsV1IssueAssignment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueAssignment') }})
    
