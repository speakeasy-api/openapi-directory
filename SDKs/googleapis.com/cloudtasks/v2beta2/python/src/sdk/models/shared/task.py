import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appenginehttprequest as shared_appenginehttprequest
from ..shared import httprequest as shared_httprequest
from ..shared import pullmessage as shared_pullmessage
from ..shared import taskstatus as shared_taskstatus

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
    http_request: Optional[shared_httprequest.HTTPRequest] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpRequest') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pull_message: Optional[shared_pullmessage.PullMessage] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pullMessage') }})
    schedule_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleTime') }})
    status: Optional[shared_taskstatus.TaskStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    view: Optional[TaskViewEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view') }})
    
