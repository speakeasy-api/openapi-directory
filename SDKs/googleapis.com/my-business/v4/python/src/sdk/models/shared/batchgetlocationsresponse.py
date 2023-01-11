import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import location as shared_location


@dataclass_json
@dataclasses.dataclass
class BatchGetLocationsResponse:
    r"""BatchGetLocationsResponse
    Response message for Locations.BatchGetLocations.
    """
    
    locations: Optional[list[shared_location.Location]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locations') }})
    
