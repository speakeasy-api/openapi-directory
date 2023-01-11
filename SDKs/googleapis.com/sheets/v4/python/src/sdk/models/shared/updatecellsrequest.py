import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gridrange as shared_gridrange
from ..shared import rowdata as shared_rowdata
from ..shared import gridcoordinate as shared_gridcoordinate


@dataclass_json
@dataclasses.dataclass
class UpdateCellsRequest:
    r"""UpdateCellsRequest
    Updates all cells in a range with new data.
    """
    
    fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    range: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    rows: Optional[list[shared_rowdata.RowData]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    start: Optional[shared_gridcoordinate.GridCoordinate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
