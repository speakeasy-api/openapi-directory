import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import duration as shared_duration
from ..shared import timestamp as shared_timestamp
from ..shared import stacktrace as shared_stacktrace
from ..shared import testcasereference as shared_testcasereference
from ..shared import tooloutputreference as shared_tooloutputreference

class TestCaseStatusEnum(str, Enum):
    PASSED = "passed"
    FAILED = "failed"
    ERROR = "error"
    SKIPPED = "skipped"
    FLAKY = "flaky"


@dataclass_json
@dataclasses.dataclass
class TestCase:
    elapsed_time: Optional[shared_duration.Duration] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elapsedTime') }})
    end_time: Optional[shared_timestamp.Timestamp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    skipped_message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skippedMessage') }})
    stack_traces: Optional[list[shared_stacktrace.StackTrace]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackTraces') }})
    start_time: Optional[shared_timestamp.Timestamp] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    status: Optional[TestCaseStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    test_case_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCaseId') }})
    test_case_reference: Optional[shared_testcasereference.TestCaseReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testCaseReference') }})
    tool_outputs: Optional[list[shared_tooloutputreference.ToolOutputReference]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('toolOutputs') }})
    
