import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assignedlocation as shared_assignedlocation


@dataclass_json
@dataclasses.dataclass
class BulkEditAssignedLocationsRequestInput:
    r"""BulkEditAssignedLocationsRequestInput
    Request message for AssignedLocationService.BulkEditAssignedLocations.
    """
    
    created_assigned_locations: Optional[list[shared_assignedlocation.AssignedLocationInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAssignedLocations') }})
    deleted_assigned_locations: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedAssignedLocations') }})
    
