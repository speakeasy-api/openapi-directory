import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleplaydeveloperreportingv1alpha1errorreport as shared_googleplaydeveloperreportingv1alpha1errorreport


@dataclass_json
@dataclasses.dataclass
class GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse:
    r"""GooglePlayDeveloperReportingV1alpha1SearchErrorReportsResponse
    Response with a paginated list of error reports matching the search query.
    """
    
    error_reports: Optional[list[shared_googleplaydeveloperreportingv1alpha1errorreport.GooglePlayDeveloperReportingV1alpha1ErrorReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorReports') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
