import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import response as shared_response
from ..shared import spreadsheet as shared_spreadsheet


@dataclass_json
@dataclasses.dataclass
class BatchUpdateSpreadsheetResponse:
    r"""BatchUpdateSpreadsheetResponse
    The reply for batch updating a spreadsheet.
    """
    
    replies: Optional[list[shared_response.Response]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replies') }})
    spreadsheet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    updated_spreadsheet: Optional[shared_spreadsheet.Spreadsheet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedSpreadsheet') }})
    
