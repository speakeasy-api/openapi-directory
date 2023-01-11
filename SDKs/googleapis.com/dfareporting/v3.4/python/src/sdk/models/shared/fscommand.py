import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FsCommandPositionOptionEnum(str, Enum):
    CENTERED = "CENTERED"
    DISTANCE_FROM_TOP_LEFT_CORNER = "DISTANCE_FROM_TOP_LEFT_CORNER"


@dataclass_json
@dataclasses.dataclass
class FsCommand:
    r"""FsCommand
    FsCommand.
    """
    
    left: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('left') }})
    position_option: Optional[FsCommandPositionOptionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positionOption') }})
    top: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('top') }})
    window_height: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowHeight') }})
    window_width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windowWidth') }})
    
