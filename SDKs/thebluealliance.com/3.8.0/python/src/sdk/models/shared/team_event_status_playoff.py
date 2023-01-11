import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import wlt_record as shared_wlt_record

class TeamEventStatusPlayoffLevelEnum(str, Enum):
    QM = "qm"
    EF = "ef"
    QF = "qf"
    SF = "sf"
    F = "f"

class TeamEventStatusPlayoffStatusEnum(str, Enum):
    WON = "won"
    ELIMINATED = "eliminated"
    PLAYING = "playing"


@dataclass_json
@dataclasses.dataclass
class TeamEventStatusPlayoff:
    r"""TeamEventStatusPlayoff
    Playoff status for this team, may be null if the team did not make playoffs, or playoffs have not begun.
    """
    
    current_level_record: Optional[shared_wlt_record.WltRecord] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_level_record') }})
    level: Optional[TeamEventStatusPlayoffLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('level') }})
    playoff_average: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playoff_average') }})
    record: Optional[shared_wlt_record.WltRecord] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record') }})
    status: Optional[TeamEventStatusPlayoffStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
