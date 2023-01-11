import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error as shared_error
from ..shared import status as shared_status

class ExecutionCallLogLevelEnum(str, Enum):
    CALL_LOG_LEVEL_UNSPECIFIED = "CALL_LOG_LEVEL_UNSPECIFIED"
    LOG_ALL_CALLS = "LOG_ALL_CALLS"
    LOG_ERRORS_ONLY = "LOG_ERRORS_ONLY"

class ExecutionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"


@dataclass_json
@dataclasses.dataclass
class Execution:
    r"""Execution
    A running instance of a [Workflow](/workflows/docs/reference/rest/v1beta/projects.locations.workflows).
    """
    
    argument: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('argument') }})
    call_log_level: Optional[ExecutionCallLogLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callLogLevel') }})
    end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    error: Optional[shared_error.Error] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    result: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    state: Optional[ExecutionStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    status: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    workflow_revision_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workflowRevisionId') }})
    

@dataclass_json
@dataclasses.dataclass
class ExecutionInput:
    r"""ExecutionInput
    A running instance of a [Workflow](/workflows/docs/reference/rest/v1beta/projects.locations.workflows).
    """
    
    argument: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('argument') }})
    call_log_level: Optional[ExecutionCallLogLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('callLogLevel') }})
    error: Optional[shared_error.Error] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    status: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
