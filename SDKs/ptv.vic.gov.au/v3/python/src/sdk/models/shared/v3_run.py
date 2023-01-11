import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import v3_vehicledescriptor as shared_v3_vehicledescriptor
from ..shared import v3_vehicleposition as shared_v3_vehicleposition


@dataclass_json
@dataclasses.dataclass
class V3Run:
    destination_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination_name') }})
    direction_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('direction_id') }})
    express_stop_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('express_stop_count') }})
    final_stop_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('final_stop_id') }})
    geopath: Optional[list[dict[str, Any]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('geopath') }})
    route_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route_id') }})
    route_type: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('route_type') }})
    run_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_id') }})
    run_ref: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_ref') }})
    run_sequence: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('run_sequence') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    vehicle_descriptor: Optional[shared_v3_vehicledescriptor.V3VehicleDescriptor] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicle_descriptor') }})
    vehicle_position: Optional[shared_v3_vehicleposition.V3VehiclePosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicle_position') }})
    
