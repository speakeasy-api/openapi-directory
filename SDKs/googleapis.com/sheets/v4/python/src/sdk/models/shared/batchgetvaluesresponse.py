import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import valuerange as shared_valuerange


@dataclass_json
@dataclasses.dataclass
class BatchGetValuesResponse:
    r"""BatchGetValuesResponse
    The response when retrieving more than one range of values in a spreadsheet.
    """
    
    spreadsheet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    value_ranges: Optional[list[shared_valuerange.ValueRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueRanges') }})
    
