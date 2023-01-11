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
class AppendValuesResponse:
    r"""AppendValuesResponse
    The response when updating a range of values in a spreadsheet.
    """
    
    spreadsheet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    table_range: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableRange') }})
    updates: Optional[shared_updatevaluesresponse.UpdateValuesResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updates') }})
    
