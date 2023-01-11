import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasourcecolumnreference as shared_datasourcecolumnreference
from ..shared import dataexecutionstatus as shared_dataexecutionstatus
from ..shared import filterspec as shared_filterspec
from ..shared import sortspec as shared_sortspec

class DataSourceTableColumnSelectionTypeEnum(str, Enum):
    DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED = "DATA_SOURCE_TABLE_COLUMN_SELECTION_TYPE_UNSPECIFIED"
    SELECTED = "SELECTED"
    SYNC_ALL = "SYNC_ALL"


@dataclass_json
@dataclasses.dataclass
class DataSourceTable:
    r"""DataSourceTable
    A data source table, which allows the user to import a static table of data from the DataSource into Sheets. This is also known as \"Extract\" in the Sheets editor.
    """
    
    column_selection_type: Optional[DataSourceTableColumnSelectionTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnSelectionType') }})
    columns: Optional[list[shared_datasourcecolumnreference.DataSourceColumnReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns') }})
    data_execution_status: Optional[shared_dataexecutionstatus.DataExecutionStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataExecutionStatus') }})
    data_source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceId') }})
    filter_specs: Optional[list[shared_filterspec.FilterSpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterSpecs') }})
    row_limit: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowLimit') }})
    sort_specs: Optional[list[shared_sortspec.SortSpec]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortSpecs') }})
    
