import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleplaydeveloperreportingv1alpha1errorissue as shared_googleplaydeveloperreportingv1alpha1errorissue


@dataclass_json
@dataclasses.dataclass
class GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse:
    r"""GooglePlayDeveloperReportingV1alpha1SearchErrorIssuesResponse
    Response with a paginated list of issues that matched the request.
    """
    
    error_issues: Optional[list[shared_googleplaydeveloperreportingv1alpha1errorissue.GooglePlayDeveloperReportingV1alpha1ErrorIssue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorIssues') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
