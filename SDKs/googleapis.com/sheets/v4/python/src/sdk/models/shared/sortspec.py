import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import color as shared_color
from ..shared import colorstyle as shared_colorstyle
from ..shared import datasourcecolumnreference as shared_datasourcecolumnreference

class SortSpecSortOrderEnum(str, Enum):
    SORT_ORDER_UNSPECIFIED = "SORT_ORDER_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclasses.dataclass
class SortSpec:
    r"""SortSpec
    A sort order associated with a specific column or row.
    """
    
    background_color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColor') }})
    background_color_style: Optional[shared_colorstyle.ColorStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColorStyle') }})
    data_source_column_reference: Optional[shared_datasourcecolumnreference.DataSourceColumnReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceColumnReference') }})
    dimension_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionIndex') }})
    foreground_color: Optional[shared_color.Color] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foregroundColor') }})
    foreground_color_style: Optional[shared_colorstyle.ColorStyle] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foregroundColorStyle') }})
    sort_order: Optional[SortSpecSortOrderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    
