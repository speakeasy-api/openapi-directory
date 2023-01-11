import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appenginehttprequest as shared_appenginehttprequest
from ..shared import attempt as shared_attempt
from ..shared import httprequest as shared_httprequest

class TaskViewEnum(str, Enum):
    VIEW_UNSPECIFIED = "VIEW_UNSPECIFIED"
    BASIC = "BASIC"
    FULL = "FULL"


@dataclass_json
@dataclasses.dataclass
class Task:
    r"""Task
    A unit of scheduled work.
    """
    
    app_engine_http_request: Optional[shared_appenginehttprequest.AppEngineHTTPRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appEngineHttpRequest') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    dispatch_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispatchCount') }})
    dispatch_deadline: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dispatchDeadline') }})
    first_attempt: Optional[shared_attempt.Attempt] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstAttempt') }})
    http_request: Optional[shared_httprequest.HTTPRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRequest') }})
    last_attempt: Optional[shared_attempt.Attempt] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAttempt') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    response_count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseCount') }})
    schedule_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleTime') }})
    view: Optional[TaskViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
