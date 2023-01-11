import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasourcecolumnreference as shared_datasourcecolumnreference
from ..shared import pivotfiltercriteria as shared_pivotfiltercriteria


@dataclass_json
@dataclasses.dataclass
class PivotFilterSpec:
    r"""PivotFilterSpec
    The pivot table filter criteria associated with a specific source column offset.
    """
    
    column_offset_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnOffsetIndex') }})
    data_source_column_reference: Optional[shared_datasourcecolumnreference.DataSourceColumnReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceColumnReference') }})
    filter_criteria: Optional[shared_pivotfiltercriteria.PivotFilterCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterCriteria') }})
    
