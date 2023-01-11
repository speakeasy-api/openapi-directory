import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import backup as shared_backup


@dataclass_json
@dataclasses.dataclass
class ListBackupsResponse:
    r"""ListBackupsResponse
    Response message for DataprocMetastore.ListBackups.
    """
    
    backups: Optional[list[shared_backup.Backup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backups') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
