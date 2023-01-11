import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import dimensionproperties as shared_dimensionproperties
from ..shared import rowdata as shared_rowdata


@dataclass_json
@dataclasses.dataclass
class GridData:
    r"""GridData
    Data in the grid, as well as metadata about the dimensions.
    """
    
    column_metadata: Optional[list[shared_dimensionproperties.DimensionProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnMetadata') }})
    row_data: Optional[list[shared_rowdata.RowData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowData') }})
    row_metadata: Optional[list[shared_dimensionproperties.DimensionProperties]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowMetadata') }})
    start_column: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startColumn') }})
    start_row: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startRow') }})
    
