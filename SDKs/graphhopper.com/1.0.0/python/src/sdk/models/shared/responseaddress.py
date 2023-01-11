import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import snappedwaypoint as shared_snappedwaypoint


@dataclass_json
@dataclasses.dataclass
class ResponseAddress:
    r"""ResponseAddress
    Address of activity
    """
    
    lat: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    location_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    lon: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lon') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    snapped_waypoint: Optional[shared_snappedwaypoint.SnappedWaypoint] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapped_waypoint') }})
    street_hint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_hint') }})
    
