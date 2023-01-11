import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import allocationpolicy as shared_allocationpolicy
from ..shared import logspolicy as shared_logspolicy
from ..shared import jobnotification as shared_jobnotification
from ..shared import jobstatus as shared_jobstatus
from ..shared import taskgroup as shared_taskgroup
from ..shared import taskgroup as shared_taskgroup


@dataclass_json
@dataclasses.dataclass
class Job:
    r"""Job
    The Cloud Batch Job description.
    """
    
    allocation_policy: Optional[shared_allocationpolicy.AllocationPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocationPolicy') }})
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    logs_policy: Optional[shared_logspolicy.LogsPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logsPolicy') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notifications: Optional[list[shared_jobnotification.JobNotification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    priority: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    status: Optional[shared_jobstatus.JobStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    task_groups: Optional[list[shared_taskgroup.TaskGroup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskGroups') }})
    uid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclasses.dataclass
class JobInput:
    r"""JobInput
    The Cloud Batch Job description.
    """
    
    allocation_policy: Optional[shared_allocationpolicy.AllocationPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allocationPolicy') }})
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    logs_policy: Optional[shared_logspolicy.LogsPolicy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logsPolicy') }})
    notifications: Optional[list[shared_jobnotification.JobNotification]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifications') }})
    priority: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    status: Optional[shared_jobstatus.JobStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    task_groups: Optional[list[shared_taskgroup.TaskGroupInput]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskGroups') }})
    
