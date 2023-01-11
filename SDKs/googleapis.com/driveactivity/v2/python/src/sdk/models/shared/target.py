import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import drive as shared_drive
from ..shared import driveitem as shared_driveitem
from ..shared import filecomment as shared_filecomment
from ..shared import teamdrive as shared_teamdrive


@dataclass_json
@dataclasses.dataclass
class Target:
    r"""Target
    Information about the target of activity.
    """
    
    drive: Optional[shared_drive.Drive] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drive') }})
    drive_item: Optional[shared_driveitem.DriveItem] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveItem') }})
    file_comment: Optional[shared_filecomment.FileComment] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fileComment') }})
    team_drive: Optional[shared_teamdrive.TeamDrive] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamDrive') }})
    
