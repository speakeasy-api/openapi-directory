import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import row as shared_row
from ..shared import date_ as shared_date_
from ..shared import header as shared_header


@dataclass_json
@dataclasses.dataclass
class ReportResult:
    r"""ReportResult
    Result of a generated report.
    """
    
    averages: Optional[shared_row.Row] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averages') }})
    end_date: Optional[shared_date_.Date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    headers: Optional[list[shared_header.Header]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headers') }})
    rows: Optional[list[shared_row.Row]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    start_date: Optional[shared_date_.Date] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    total_matched_rows: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalMatchedRows') }})
    totals: Optional[shared_row.Row] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totals') }})
    warnings: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warnings') }})
    
