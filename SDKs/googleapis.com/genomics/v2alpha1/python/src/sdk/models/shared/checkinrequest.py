import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import timestampedevent as shared_timestampedevent
from ..shared import status as shared_status
from ..shared import workerstatus as shared_workerstatus


@dataclass_json
@dataclasses.dataclass
class CheckInRequest:
    r"""CheckInRequest
    The parameters to the CheckIn method.
    """
    
    deadline_expired: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deadlineExpired') }})
    event: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    events: Optional[list[shared_timestampedevent.TimestampedEvent]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('events') }})
    result: Optional[shared_status.Status] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    sos_report: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sosReport') }})
    worker_status: Optional[shared_workerstatus.WorkerStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerStatus') }})
    
