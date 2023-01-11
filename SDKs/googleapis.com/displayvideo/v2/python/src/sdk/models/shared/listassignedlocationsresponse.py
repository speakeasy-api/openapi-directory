import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assignedlocation as shared_assignedlocation


@dataclass_json
@dataclasses.dataclass
class ListAssignedLocationsResponse:
    r"""ListAssignedLocationsResponse
    Response message for AssignedLocationService.ListAssignedLocations.
    """
    
    assigned_locations: Optional[list[shared_assignedlocation.AssignedLocation]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignedLocations') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
