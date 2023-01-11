import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Polygon:
    coordinates: Optional[list[list[list[float]]]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinates') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
