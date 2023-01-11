import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import booleancondition as shared_booleancondition
from ..shared import color as shared_color
from ..shared import colorstyle as shared_colorstyle


@dataclass_json
@dataclasses.dataclass
class FilterCriteria:
    condition: Optional[shared_booleancondition.BooleanCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    hidden_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiddenValues') }})
    visible_background_color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibleBackgroundColor') }})
    visible_background_color_style: Optional[shared_colorstyle.ColorStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibleBackgroundColorStyle') }})
    visible_foreground_color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibleForegroundColor') }})
    visible_foreground_color_style: Optional[shared_colorstyle.ColorStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibleForegroundColorStyle') }})
    
