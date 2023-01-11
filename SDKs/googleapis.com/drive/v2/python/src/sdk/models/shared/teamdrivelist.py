import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import teamdrive as shared_teamdrive


@dataclass_json
@dataclasses.dataclass
class TeamDriveList:
    r"""TeamDriveList
    A list of Team Drives.
    """
    
    items: Optional[list[shared_teamdrive.TeamDrive]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
