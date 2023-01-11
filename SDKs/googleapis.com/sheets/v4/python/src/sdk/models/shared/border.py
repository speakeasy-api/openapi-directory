import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import color as shared_color
from ..shared import colorstyle as shared_colorstyle

class BorderStyleEnum(str, Enum):
    STYLE_UNSPECIFIED = "STYLE_UNSPECIFIED"
    DOTTED = "DOTTED"
    DASHED = "DASHED"
    SOLID = "SOLID"
    SOLID_MEDIUM = "SOLID_MEDIUM"
    SOLID_THICK = "SOLID_THICK"
    NONE = "NONE"
    DOUBLE = "DOUBLE"


@dataclass_json
@dataclasses.dataclass
class Border:
    r"""Border
    A border along a cell.
    """
    
    color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    color_style: Optional[shared_colorstyle.ColorStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorStyle') }})
    style: Optional[BorderStyleEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('style') }})
    width: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
