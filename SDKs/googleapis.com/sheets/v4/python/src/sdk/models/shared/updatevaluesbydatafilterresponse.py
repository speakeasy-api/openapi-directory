import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import datafilter as shared_datafilter
from ..shared import valuerange as shared_valuerange


@dataclass_json
@dataclasses.dataclass
class UpdateValuesByDataFilterResponse:
    r"""UpdateValuesByDataFilterResponse
    The response when updating a range of values by a data filter in a spreadsheet.
    """
    
    data_filter: Optional[shared_datafilter.DataFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataFilter') }})
    updated_cells: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedCells') }})
    updated_columns: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedColumns') }})
    updated_data: Optional[shared_valuerange.ValueRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedData') }})
    updated_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedRange') }})
    updated_rows: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedRows') }})
    
