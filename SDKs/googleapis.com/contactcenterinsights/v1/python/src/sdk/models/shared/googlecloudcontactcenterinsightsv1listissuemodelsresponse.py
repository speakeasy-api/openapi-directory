import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlecloudcontactcenterinsightsv1issuemodel as shared_googlecloudcontactcenterinsightsv1issuemodel


@dataclass_json
@dataclasses.dataclass
class GoogleCloudContactcenterinsightsV1ListIssueModelsResponse:
    r"""GoogleCloudContactcenterinsightsV1ListIssueModelsResponse
    The response of listing issue models.
    """
    
    issue_models: Optional[list[shared_googlecloudcontactcenterinsightsv1issuemodel.GoogleCloudContactcenterinsightsV1IssueModel]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueModels') }})
    
