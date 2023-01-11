import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backupplan as shared_backupplan


@dataclass_json
@dataclasses.dataclass
class ListBackupPlansResponse:
    r"""ListBackupPlansResponse
    Response message for ListBackupPlans.
    """
    
    backup_plans: Optional[list[shared_backupplan.BackupPlan]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupPlans') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
