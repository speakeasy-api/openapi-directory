import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import drivereference as shared_drivereference
from ..shared import driveitemreference as shared_driveitemreference
from ..shared import teamdrivereference as shared_teamdrivereference


@dataclass_json
@dataclasses.dataclass
class TargetReference:
    r"""TargetReference
    A lightweight reference to the target of activity.
    """
    
    drive: Optional[shared_drivereference.DriveReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drive') }})
    drive_item: Optional[shared_driveitemreference.DriveItemReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driveItem') }})
    team_drive: Optional[shared_teamdrivereference.TeamDriveReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamDrive') }})
    
