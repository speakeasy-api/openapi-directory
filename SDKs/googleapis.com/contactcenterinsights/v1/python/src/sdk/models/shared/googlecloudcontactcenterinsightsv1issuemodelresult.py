import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1issueassignment as shared_googlecloudcontactcenterinsightsv1issueassignment


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1IssueModelResult:
    r"""GoogleCloudContactcenterinsightsV1IssueModelResult
    Issue Modeling result on a conversation.
    """
    
    issue_model: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueModel') }})
    issues: Optional[list[shared_googlecloudcontactcenterinsightsv1issueassignment.GoogleCloudContactcenterinsightsV1IssueAssignment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    
