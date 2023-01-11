import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import volumebackup as shared_volumebackup


@dataclass_json
@dataclasses.dataclass
class ListVolumeBackupsResponse:
    r"""ListVolumeBackupsResponse
    Response message for ListVolumeBackups.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    volume_backups: Optional[list[shared_volumebackup.VolumeBackup]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeBackups') }})
    
