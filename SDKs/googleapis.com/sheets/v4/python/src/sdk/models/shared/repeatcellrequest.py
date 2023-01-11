import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import celldata as shared_celldata
from ..shared import gridrange as shared_gridrange


@dataclass_json
@dataclasses.dataclass
class RepeatCellRequest:
    r"""RepeatCellRequest
    Updates all cells in the range to the values in the given Cell object. Only the fields listed in the fields field are updated; others are unchanged. If writing a cell with a formula, the formula's ranges will automatically increment for each field in the range. For example, if writing a cell with formula `=A1` into range B2:C4, B2 would be `=A1`, B3 would be `=A2`, B4 would be `=A3`, C2 would be `=B1`, C3 would be `=B2`, C4 would be `=B3`. To keep the formula's ranges static, use the `$` indicator. For example, use the formula `=$A$1` to prevent both the row and the column from incrementing.
    """
    
    cell: Optional[shared_celldata.CellData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cell') }})
    fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    range: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
