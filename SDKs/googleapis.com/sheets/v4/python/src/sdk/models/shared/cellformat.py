import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import color as shared_color
from ..shared import colorstyle as shared_colorstyle
from ..shared import borders as shared_borders
from ..shared import numberformat as shared_numberformat
from ..shared import padding as shared_padding
from ..shared import textformat as shared_textformat
from ..shared import textrotation as shared_textrotation

class CellFormatHorizontalAlignmentEnum(str, Enum):
    HORIZONTAL_ALIGN_UNSPECIFIED = "HORIZONTAL_ALIGN_UNSPECIFIED"
    LEFT = "LEFT"
    CENTER = "CENTER"
    RIGHT = "RIGHT"

class CellFormatHyperlinkDisplayTypeEnum(str, Enum):
    HYPERLINK_DISPLAY_TYPE_UNSPECIFIED = "HYPERLINK_DISPLAY_TYPE_UNSPECIFIED"
    LINKED = "LINKED"
    PLAIN_TEXT = "PLAIN_TEXT"

class CellFormatTextDirectionEnum(str, Enum):
    TEXT_DIRECTION_UNSPECIFIED = "TEXT_DIRECTION_UNSPECIFIED"
    LEFT_TO_RIGHT = "LEFT_TO_RIGHT"
    RIGHT_TO_LEFT = "RIGHT_TO_LEFT"

class CellFormatVerticalAlignmentEnum(str, Enum):
    VERTICAL_ALIGN_UNSPECIFIED = "VERTICAL_ALIGN_UNSPECIFIED"
    TOP = "TOP"
    MIDDLE = "MIDDLE"
    BOTTOM = "BOTTOM"

class CellFormatWrapStrategyEnum(str, Enum):
    WRAP_STRATEGY_UNSPECIFIED = "WRAP_STRATEGY_UNSPECIFIED"
    OVERFLOW_CELL = "OVERFLOW_CELL"
    LEGACY_WRAP = "LEGACY_WRAP"
    CLIP = "CLIP"
    WRAP = "WRAP"


@dataclass_json
@dataclasses.dataclass
class CellFormat:
    r"""CellFormat
    The format of a cell.
    """
    
    background_color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    background_color_style: Optional[shared_colorstyle.ColorStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColorStyle') }})
    borders: Optional[shared_borders.Borders] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borders') }})
    horizontal_alignment: Optional[CellFormatHorizontalAlignmentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('horizontalAlignment') }})
    hyperlink_display_type: Optional[CellFormatHyperlinkDisplayTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hyperlinkDisplayType') }})
    number_format: Optional[shared_numberformat.NumberFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numberFormat') }})
    padding: Optional[shared_padding.Padding] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('padding') }})
    text_direction: Optional[CellFormatTextDirectionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textDirection') }})
    text_format: Optional[shared_textformat.TextFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textFormat') }})
    text_rotation: Optional[shared_textrotation.TextRotation] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textRotation') }})
    vertical_alignment: Optional[CellFormatVerticalAlignmentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verticalAlignment') }})
    wrap_strategy: Optional[CellFormatWrapStrategyEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wrapStrategy') }})
    
