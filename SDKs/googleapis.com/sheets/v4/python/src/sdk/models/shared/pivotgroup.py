import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasourcecolumnreference as shared_datasourcecolumnreference
from ..shared import pivotgrouplimit as shared_pivotgrouplimit
from ..shared import pivotgrouprule as shared_pivotgrouprule
from ..shared import pivotgroupsortvaluebucket as shared_pivotgroupsortvaluebucket
from ..shared import pivotgroupvaluemetadata as shared_pivotgroupvaluemetadata

class PivotGroupSortOrderEnum(str, Enum):
    SORT_ORDER_UNSPECIFIED = "SORT_ORDER_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclasses.dataclass
class PivotGroup:
    r"""PivotGroup
    A single grouping (either row or column) in a pivot table.
    """
    
    data_source_column_reference: Optional[shared_datasourcecolumnreference.DataSourceColumnReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceColumnReference') }})
    group_limit: Optional[shared_pivotgrouplimit.PivotGroupLimit] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupLimit') }})
    group_rule: Optional[shared_pivotgrouprule.PivotGroupRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupRule') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    repeat_headings: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repeatHeadings') }})
    show_totals: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showTotals') }})
    sort_order: Optional[PivotGroupSortOrderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    source_column_offset: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceColumnOffset') }})
    value_bucket: Optional[shared_pivotgroupsortvaluebucket.PivotGroupSortValueBucket] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueBucket') }})
    value_metadata: Optional[list[shared_pivotgroupvaluemetadata.PivotGroupValueMetadata]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueMetadata') }})
    
