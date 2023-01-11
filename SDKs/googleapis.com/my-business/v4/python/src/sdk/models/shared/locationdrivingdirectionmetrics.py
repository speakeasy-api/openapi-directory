import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import topdirectionsources as shared_topdirectionsources


@dataclass_json
@dataclasses.dataclass
class LocationDrivingDirectionMetrics:
    r"""LocationDrivingDirectionMetrics
    A location indexed with the regions that people usually come from. This is captured by counting how many driving-direction requests to this location are from each region.
    """
    
    location_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationName') }})
    time_zone: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    top_direction_sources: Optional[list[shared_topdirectionsources.TopDirectionSources]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topDirectionSources') }})
    
