import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class BatchClearValuesByDataFilterResponse:
    r"""BatchClearValuesByDataFilterResponse
    The response when clearing a range of values selected with DataFilters in a spreadsheet.
    """
    
    cleared_ranges: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clearedRanges') }})
    spreadsheet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    
