import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ospolicyassignment as shared_ospolicyassignment


@dataclass_json
@dataclasses.dataclass
class ListOsPolicyAssignmentsResponse:
    r"""ListOsPolicyAssignmentsResponse
    A response message for listing all assignments under given parent.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    os_policy_assignments: Optional[list[shared_ospolicyassignment.OsPolicyAssignment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyAssignments') }})
    
