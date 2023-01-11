import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assignment as shared_assignment


@dataclass_json
@dataclasses.dataclass
class ListAssignmentsResponse:
    r"""ListAssignmentsResponse
    The response for ReservationService.ListAssignments.
    """
    
    assignments: Optional[list[shared_assignment.Assignment]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignments') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
