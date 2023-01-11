import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timezone as shared_timezone

class AccountStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    READY = "READY"
    NEEDS_ATTENTION = "NEEDS_ATTENTION"
    CLOSED = "CLOSED"


@dataclass_json
@dataclasses.dataclass
class Account:
    r"""Account
    Representation of an account.
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pending_tasks: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pendingTasks') }})
    premium: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('premium') }})
    state: Optional[AccountStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    time_zone: Optional[shared_timezone.TimeZone] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    
