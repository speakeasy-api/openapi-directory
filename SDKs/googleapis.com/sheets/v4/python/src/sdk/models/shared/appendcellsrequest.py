import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import rowdata as shared_rowdata


@dataclass_json
@dataclasses.dataclass
class AppendCellsRequest:
    r"""AppendCellsRequest
    Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary.
    """
    
    fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    rows: Optional[list[shared_rowdata.RowData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    sheet_id: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    
