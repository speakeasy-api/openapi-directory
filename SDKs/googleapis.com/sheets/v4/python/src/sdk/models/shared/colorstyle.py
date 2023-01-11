import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import color as shared_color

class ColorStyleThemeColorEnum(str, Enum):
    THEME_COLOR_TYPE_UNSPECIFIED = "THEME_COLOR_TYPE_UNSPECIFIED"
    TEXT = "TEXT"
    BACKGROUND = "BACKGROUND"
    ACCENT1 = "ACCENT1"
    ACCENT2 = "ACCENT2"
    ACCENT3 = "ACCENT3"
    ACCENT4 = "ACCENT4"
    ACCENT5 = "ACCENT5"
    ACCENT6 = "ACCENT6"
    LINK = "LINK"


@dataclass_json
@dataclasses.dataclass
class ColorStyle:
    r"""ColorStyle
    A color value.
    """
    
    rgb_color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rgbColor') }})
    theme_color: Optional[ColorStyleThemeColorEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('themeColor') }})
    
