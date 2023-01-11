import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import team_event_status_alliance_backup as shared_team_event_status_alliance_backup


@dataclass_json
@dataclasses.dataclass
class TeamEventStatusAlliance:
    number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    pick: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pick') }})
    backup: Optional[shared_team_event_status_alliance_backup.TeamEventStatusAllianceBackup] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backup') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
