import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import drivefile as shared_drivefile

class SharedDriveFileShareModeEnum(str, Enum):
    UNKNOWN_SHARE_MODE = "UNKNOWN_SHARE_MODE"
    VIEW = "VIEW"
    EDIT = "EDIT"
    STUDENT_COPY = "STUDENT_COPY"


@dataclass_json
@dataclasses.dataclass
class SharedDriveFile:
    r"""SharedDriveFile
    Drive file that is used as material for course work.
    """
    
    drive_file: Optional[shared_drivefile.DriveFile] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveFile') }})
    share_mode: Optional[SharedDriveFileShareModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shareMode') }})
    
