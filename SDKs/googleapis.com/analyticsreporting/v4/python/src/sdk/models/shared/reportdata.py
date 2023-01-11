import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import daterangevalues as shared_daterangevalues
from ..shared import reportrow as shared_reportrow


@dataclass_json
@dataclasses.dataclass
class ReportData:
    r"""ReportData
    The data part of the report.
    """
    
    data_last_refreshed: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataLastRefreshed') }})
    empty_reason: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emptyReason') }})
    is_data_golden: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDataGolden') }})
    maximums: Optional[list[shared_daterangevalues.DateRangeValues]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximums') }})
    minimums: Optional[list[shared_daterangevalues.DateRangeValues]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimums') }})
    row_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowCount') }})
    rows: Optional[list[shared_reportrow.ReportRow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    samples_read_counts: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplesReadCounts') }})
    sampling_space_sizes: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplingSpaceSizes') }})
    totals: Optional[list[shared_daterangevalues.DateRangeValues]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totals') }})
    
