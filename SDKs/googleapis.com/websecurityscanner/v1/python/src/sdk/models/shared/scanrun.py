import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scanrunerrortrace as shared_scanrunerrortrace
from ..shared import scanrunwarningtrace as shared_scanrunwarningtrace

class ScanRunExecutionStateEnum(str, Enum):
    EXECUTION_STATE_UNSPECIFIED = "EXECUTION_STATE_UNSPECIFIED"
    QUEUED = "QUEUED"
    SCANNING = "SCANNING"
    FINISHED = "FINISHED"

class ScanRunResultStateEnum(str, Enum):
    RESULT_STATE_UNSPECIFIED = "RESULT_STATE_UNSPECIFIED"
    SUCCESS = "SUCCESS"
    ERROR = "ERROR"
    KILLED = "KILLED"


@dataclass_json
@dataclasses.dataclass
class ScanRun:
    r"""ScanRun
    A ScanRun is a output-only resource representing an actual run of the scan. Next id: 12
    """
    
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    error_trace: Optional[shared_scanrunerrortrace.ScanRunErrorTrace] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorTrace') }})
    execution_state: Optional[ScanRunExecutionStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionState') }})
    has_vulnerabilities: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasVulnerabilities') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    progress_percent: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progressPercent') }})
    result_state: Optional[ScanRunResultStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resultState') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    urls_crawled_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlsCrawledCount') }})
    urls_tested_count: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urlsTestedCount') }})
    warning_traces: Optional[list[shared_scanrunwarningtrace.ScanRunWarningTrace]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('warningTraces') }})
    
