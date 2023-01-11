import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ospolicyassignmentreport as shared_ospolicyassignmentreport


@dataclass_json
@dataclasses.dataclass
class ListOsPolicyAssignmentReportsResponse:
    r"""ListOsPolicyAssignmentReportsResponse
    A response message for listing OS Policy assignment reports including the page of results and page token.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    os_policy_assignment_reports: Optional[list[shared_ospolicyassignmentreport.OsPolicyAssignmentReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyAssignmentReports') }})
    
