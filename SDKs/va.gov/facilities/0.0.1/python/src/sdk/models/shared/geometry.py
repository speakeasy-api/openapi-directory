import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GeometryTypeEnum(str, Enum):
    POINT = "Point"


@dataclass_json
@dataclasses.dataclass
class Geometry:
    type: GeometryTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    coordinates: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinates') }})
    
