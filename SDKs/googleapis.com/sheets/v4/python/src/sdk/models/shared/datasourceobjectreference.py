import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gridcoordinate as shared_gridcoordinate


@dataclass_json
@dataclasses.dataclass
class DataSourceObjectReference:
    r"""DataSourceObjectReference
    Reference to a data source object.
    """
    
    chart_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chartId') }})
    data_source_formula_cell: Optional[shared_gridcoordinate.GridCoordinate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceFormulaCell') }})
    data_source_pivot_table_anchor_cell: Optional[shared_gridcoordinate.GridCoordinate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourcePivotTableAnchorCell') }})
    data_source_table_anchor_cell: Optional[shared_gridcoordinate.GridCoordinate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceTableAnchorCell') }})
    sheet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    
