import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import error as shared_error

class BackfillJobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    NOT_STARTED = "NOT_STARTED"
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    STOPPED = "STOPPED"
    FAILED = "FAILED"
    COMPLETED = "COMPLETED"
    UNSUPPORTED = "UNSUPPORTED"

class BackfillJobTriggerEnum(str, Enum):
    TRIGGER_UNSPECIFIED = "TRIGGER_UNSPECIFIED"
    AUTOMATIC = "AUTOMATIC"
    MANUAL = "MANUAL"


@dataclass_json
@dataclasses.dataclass
class BackfillJob:
    r"""BackfillJob
    Represents a backfill job on a specific stream object.
    """
    
    errors: Optional[list[shared_error.Error]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errors') }})
    last_end_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastEndTime') }})
    last_start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastStartTime') }})
    state: Optional[BackfillJobStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    trigger: Optional[BackfillJobTriggerEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger') }})
    
