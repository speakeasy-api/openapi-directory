import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Schedule:
    r"""Schedule
    Schedule defines scheduling parameters for automatically creating Backups via this BackupPlan.
    """
    
    cron_schedule: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cronSchedule') }})
    paused: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paused') }})
    
