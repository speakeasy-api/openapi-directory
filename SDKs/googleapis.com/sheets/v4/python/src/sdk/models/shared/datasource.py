import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datasourcecolumn as shared_datasourcecolumn
from ..shared import datasourcespec as shared_datasourcespec


@dataclass_json
@dataclasses.dataclass
class DataSource:
    r"""DataSource
    Information about an external data source in the spreadsheet.
    """
    
    calculated_columns: Optional[list[shared_datasourcecolumn.DataSourceColumn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calculatedColumns') }})
    data_source_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceId') }})
    sheet_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    spec: Optional[shared_datasourcespec.DataSourceSpec] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spec') }})
    
