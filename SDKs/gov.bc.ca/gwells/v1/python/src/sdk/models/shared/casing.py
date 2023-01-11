import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Casing:
    diameter: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diameter') }})
    end: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    casing_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('casing_code') }})
    casing_material: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('casing_material') }})
    drive_shoe: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drive_shoe') }})
    wall_thickness: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wall_thickness') }})
    
