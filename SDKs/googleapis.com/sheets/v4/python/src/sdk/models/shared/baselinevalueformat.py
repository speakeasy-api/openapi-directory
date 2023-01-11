import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import color as shared_color
from ..shared import colorstyle as shared_colorstyle
from ..shared import textposition as shared_textposition
from ..shared import textformat as shared_textformat

class BaselineValueFormatComparisonTypeEnum(str, Enum):
    COMPARISON_TYPE_UNDEFINED = "COMPARISON_TYPE_UNDEFINED"
    ABSOLUTE_DIFFERENCE = "ABSOLUTE_DIFFERENCE"
    PERCENTAGE_DIFFERENCE = "PERCENTAGE_DIFFERENCE"


@dataclass_json
@dataclasses.dataclass
class BaselineValueFormat:
    r"""BaselineValueFormat
    Formatting options for baseline value.
    """
    
    comparison_type: Optional[BaselineValueFormatComparisonTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparisonType') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    negative_color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeColor') }})
    negative_color_style: Optional[shared_colorstyle.ColorStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('negativeColorStyle') }})
    position: Optional[shared_textposition.TextPosition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    positive_color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positiveColor') }})
    positive_color_style: Optional[shared_colorstyle.ColorStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positiveColorStyle') }})
    text_format: Optional[shared_textformat.TextFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textFormat') }})
    
