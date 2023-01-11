import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import stop as shared_stop


@dataclass_json
@dataclasses.dataclass
class Shipment:
    delivery: shared_stop.Stop = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    pickup: shared_stop.Stop = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickup') }})
    allowed_vehicles: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_vehicles') }})
    disallowed_vehicles: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disallowed_vehicles') }})
    max_time_in_vehicle: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_time_in_vehicle') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    priority: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    required_skills: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_skills') }})
    size: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    
