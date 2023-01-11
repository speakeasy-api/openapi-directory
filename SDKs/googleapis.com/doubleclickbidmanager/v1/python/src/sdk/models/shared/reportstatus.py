import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reportfailure as shared_reportfailure

class ReportStatusFormatEnum(str, Enum):
    CSV = "CSV"
    EXCEL_CSV = "EXCEL_CSV"
    XLSX = "XLSX"

class ReportStatusStateEnum(str, Enum):
    RUNNING = "RUNNING"
    DONE = "DONE"
    FAILED = "FAILED"


@dataclass_json
@dataclasses.dataclass
class ReportStatus:
    r"""ReportStatus
    Report status.
    """
    
    failure: Optional[shared_reportfailure.ReportFailure] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failure') }})
    finish_time_ms: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finishTimeMs') }})
    format: Optional[ReportStatusFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    state: Optional[ReportStatusStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
