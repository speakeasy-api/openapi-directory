import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1issue as shared_googlecloudcontactcenterinsightsv1issue


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1ListIssuesResponse:
    r"""GoogleCloudContactcenterinsightsV1ListIssuesResponse
    The response of listing issues.
    """
    
    issues: Optional[list[shared_googlecloudcontactcenterinsightsv1issue.GoogleCloudContactcenterinsightsV1Issue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issues') }})
    
