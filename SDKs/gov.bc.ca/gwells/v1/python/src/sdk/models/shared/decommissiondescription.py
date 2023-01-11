import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DecommissionDescription:
    end: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    material: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('material') }})
    start: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    observations: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observations') }})
    
