import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import domain as shared_domain
from ..shared import drivereference as shared_drivereference
from ..shared import teamdrivereference as shared_teamdrivereference
from ..shared import user as shared_user


@dataclass_json
@dataclasses.dataclass
class Owner:
    r"""Owner
    Information about the owner of a Drive item.
    """
    
    domain: Optional[shared_domain.Domain] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    drive: Optional[shared_drivereference.DriveReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drive') }})
    team_drive: Optional[shared_teamdrivereference.TeamDriveReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamDrive') }})
    user: Optional[shared_user.User] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
