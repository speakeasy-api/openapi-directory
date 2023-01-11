import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import vehicleprofileid_enum as shared_vehicleprofileid_enum


@dataclass_json
@dataclasses.dataclass
class SymmetricalMatrixRequest:
    curbsides: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('curbsides') }})
    fail_fast: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fail_fast') }})
    out_arrays: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('out_arrays') }})
    point_hints: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('point_hints') }})
    points: Optional[list[list[float]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    snap_preventions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snap_preventions') }})
    turn_costs: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('turn_costs') }})
    vehicle: Optional[shared_vehicleprofileid_enum.VehicleProfileIDEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicle') }})
    
