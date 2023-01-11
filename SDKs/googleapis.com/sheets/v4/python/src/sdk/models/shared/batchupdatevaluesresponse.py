import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import updatevaluesresponse as shared_updatevaluesresponse


@dataclass_json
@dataclasses.dataclass
class BatchUpdateValuesResponse:
    r"""BatchUpdateValuesResponse
    The response when updating a range of values in a spreadsheet.
    """
    
    responses: Optional[list[shared_updatevaluesresponse.UpdateValuesResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    spreadsheet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    total_updated_cells: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalUpdatedCells') }})
    total_updated_columns: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalUpdatedColumns') }})
    total_updated_rows: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalUpdatedRows') }})
    total_updated_sheets: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalUpdatedSheets') }})
    
