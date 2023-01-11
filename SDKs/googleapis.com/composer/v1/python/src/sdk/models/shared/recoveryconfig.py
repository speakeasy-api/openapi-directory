import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scheduledsnapshotsconfig as shared_scheduledsnapshotsconfig


@dataclass_json
@dataclasses.dataclass
class RecoveryConfig:
    r"""RecoveryConfig
    The Recovery settings of an environment.
    """
    
    scheduled_snapshots_config: Optional[shared_scheduledsnapshotsconfig.ScheduledSnapshotsConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledSnapshotsConfig') }})
    
