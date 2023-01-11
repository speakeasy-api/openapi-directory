import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import color as shared_color
from ..shared import colorstyle as shared_colorstyle
from ..shared import gridrange as shared_gridrange
from ..shared import filtercriteria as shared_filtercriteria
from ..shared import textformat as shared_textformat

class SlicerSpecHorizontalAlignmentEnum(str, Enum):
    HORIZONTAL_ALIGN_UNSPECIFIED = "HORIZONTAL_ALIGN_UNSPECIFIED"
    LEFT = "LEFT"
    CENTER = "CENTER"
    RIGHT = "RIGHT"


@dataclass_json
@dataclasses.dataclass
class SlicerSpec:
    r"""SlicerSpec
    The specifications of a slicer.
    """
    
    apply_to_pivot_tables: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applyToPivotTables') }})
    background_color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    background_color_style: Optional[shared_colorstyle.ColorStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColorStyle') }})
    column_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnIndex') }})
    data_range: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRange') }})
    filter_criteria: Optional[shared_filtercriteria.FilterCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterCriteria') }})
    horizontal_alignment: Optional[SlicerSpecHorizontalAlignmentEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('horizontalAlignment') }})
    text_format: Optional[shared_textformat.TextFormat] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textFormat') }})
    title: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
