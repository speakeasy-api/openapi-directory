import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import request as shared_request


@dataclass_json
@dataclasses.dataclass
class BatchUpdateSpreadsheetRequest:
    r"""BatchUpdateSpreadsheetRequest
    The request for updating any aspect of a spreadsheet.
    """
    
    include_spreadsheet_in_response: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeSpreadsheetInResponse') }})
    requests: Optional[list[shared_request.Request]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    response_include_grid_data: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseIncludeGridData') }})
    response_ranges: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseRanges') }})
    
