import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import patchinstancefilter as shared_patchinstancefilter
from ..shared import onetimeschedule as shared_onetimeschedule
from ..shared import patchconfig as shared_patchconfig
from ..shared import recurringschedule as shared_recurringschedule
from ..shared import patchrollout as shared_patchrollout
from ..shared import recurringschedule as shared_recurringschedule

class PatchDeploymentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    PAUSED = "PAUSED"


@dataclass_json
@dataclasses.dataclass
class PatchDeploymentInput:
    r"""PatchDeploymentInput
    Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
    """
    
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    instance_filter: Optional[shared_patchinstancefilter.PatchInstanceFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceFilter') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    one_time_schedule: Optional[shared_onetimeschedule.OneTimeSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneTimeSchedule') }})
    patch_config: Optional[shared_patchconfig.PatchConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patchConfig') }})
    recurring_schedule: Optional[shared_recurringschedule.RecurringScheduleInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringSchedule') }})
    rollout: Optional[shared_patchrollout.PatchRollout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollout') }})
    

@dataclass_json
@dataclasses.dataclass
class PatchDeployment:
    r"""PatchDeployment
    Patch deployments are configurations that individual patch jobs use to complete a patch. These configurations include instance filter, package repository settings, and a schedule. For more information about creating and managing patch deployments, see [Scheduling patch jobs](https://cloud.google.com/compute/docs/os-patch-management/schedule-patch-jobs).
    """
    
    create_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    instance_filter: Optional[shared_patchinstancefilter.PatchInstanceFilter] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceFilter') }})
    last_execute_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastExecuteTime') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    one_time_schedule: Optional[shared_onetimeschedule.OneTimeSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneTimeSchedule') }})
    patch_config: Optional[shared_patchconfig.PatchConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patchConfig') }})
    recurring_schedule: Optional[shared_recurringschedule.RecurringSchedule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurringSchedule') }})
    rollout: Optional[shared_patchrollout.PatchRollout] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollout') }})
    state: Optional[PatchDeploymentStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
