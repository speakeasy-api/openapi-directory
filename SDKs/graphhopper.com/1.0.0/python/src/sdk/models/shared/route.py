import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import activity as shared_activity
from ..shared import routepoint as shared_routepoint


@dataclass_json
@dataclasses.dataclass
class Route:
    activities: Optional[list[shared_activity.Activity]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activities') }})
    completion_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completion_time') }})
    distance: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    points: Optional[list[shared_routepoint.RoutePoint]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    preparation_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preparation_time') }})
    service_duration: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_duration') }})
    transport_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transport_time') }})
    vehicle_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicle_id') }})
    waiting_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_time') }})
    
