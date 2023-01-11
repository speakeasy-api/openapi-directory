import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timeofday as shared_timeofday
from ..shared import latlng as shared_latlng

class CommuteFilterCommuteMethodEnum(str, Enum):
    COMMUTE_METHOD_UNSPECIFIED = "COMMUTE_METHOD_UNSPECIFIED"
    DRIVING = "DRIVING"
    TRANSIT = "TRANSIT"
    WALKING = "WALKING"
    CYCLING = "CYCLING"
    TRANSIT_ACCESSIBLE = "TRANSIT_ACCESSIBLE"

class CommuteFilterRoadTrafficEnum(str, Enum):
    ROAD_TRAFFIC_UNSPECIFIED = "ROAD_TRAFFIC_UNSPECIFIED"
    TRAFFIC_FREE = "TRAFFIC_FREE"
    BUSY_HOUR = "BUSY_HOUR"


@dataclass_json
@dataclasses.dataclass
class CommuteFilter:
    r"""CommuteFilter
    Parameters needed for commute search.
    """
    
    allow_imprecise_addresses: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowImpreciseAddresses') }})
    commute_method: Optional[CommuteFilterCommuteMethodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commuteMethod') }})
    departure_time: Optional[shared_timeofday.TimeOfDay] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departureTime') }})
    road_traffic: Optional[CommuteFilterRoadTrafficEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roadTraffic') }})
    start_coordinates: Optional[shared_latlng.LatLng] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startCoordinates') }})
    travel_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('travelDuration') }})
    
