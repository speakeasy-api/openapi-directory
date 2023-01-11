import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backuprun as shared_backuprun


@dataclass_json
@dataclasses.dataclass
class BackupRunsListResponse:
    r"""BackupRunsListResponse
    Backup run list results.
    """
    
    items: Optional[list[shared_backuprun.BackupRun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
