import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssignedLocation:
    r"""AssignedLocation
    An assignment between a location list and a relevant targeting option. Currently, geo region targeting options are the only supported option for assignment.
    """
    
    assigned_location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignedLocationId') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    targeting_option_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    

@dataclass_json
@dataclasses.dataclass
class AssignedLocationInput:
    r"""AssignedLocationInput
    An assignment between a location list and a relevant targeting option. Currently, geo region targeting options are the only supported option for assignment.
    """
    
    targeting_option_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    
