import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import matchedvaluerange as shared_matchedvaluerange


@dataclass_json
@dataclasses.dataclass
class BatchGetValuesByDataFilterResponse:
    r"""BatchGetValuesByDataFilterResponse
    The response when retrieving more than one range of values in a spreadsheet selected by DataFilters.
    """
    
    spreadsheet_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    value_ranges: Optional[list[shared_matchedvaluerange.MatchedValueRange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueRanges') }})
    
