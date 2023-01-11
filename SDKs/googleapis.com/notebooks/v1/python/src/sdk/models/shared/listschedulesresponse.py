import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import schedule as shared_schedule


@dataclass_json
@dataclasses.dataclass
class ListSchedulesResponse:
    r"""ListSchedulesResponse
    Response for listing scheduled notebook job.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    schedules: Optional[list[shared_schedule.Schedule]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedules') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
