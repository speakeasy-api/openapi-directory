import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasourcecolumnreference as shared_datasourcecolumnreference
from ..shared import filtercriteria as shared_filtercriteria


@dataclass_json
@dataclasses.dataclass
class FilterSpec:
    r"""FilterSpec
    The filter criteria associated with a specific column.
    """
    
    column_index: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnIndex') }})
    data_source_column_reference: Optional[shared_datasourcecolumnreference.DataSourceColumnReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceColumnReference') }})
    filter_criteria: Optional[shared_filtercriteria.FilterCriteria] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterCriteria') }})
    
