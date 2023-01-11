import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import match_alliance as shared_match_alliance


@dataclass_json
@dataclasses.dataclass
class MatchSimpleAlliances:
    r"""MatchSimpleAlliances
    A list of alliances, the teams on the alliances, and their score.
    """
    
    blue: Optional[shared_match_alliance.MatchAlliance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blue') }})
    red: Optional[shared_match_alliance.MatchAlliance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('red') }})
    
class MatchSimpleCompLevelEnum(str, Enum):
    QM = "qm"
    EF = "ef"
    QF = "qf"
    SF = "sf"
    F = "f"

class MatchSimpleWinningAllianceEnum(str, Enum):
    RED = "red"
    BLUE = "blue"
    UNKNOWN = ""


@dataclass_json
@dataclasses.dataclass
class MatchSimple:
    comp_level: MatchSimpleCompLevelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comp_level') }})
    event_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_key') }})
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    match_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('match_number') }})
    set_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('set_number') }})
    actual_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actual_time') }})
    alliances: Optional[MatchSimpleAlliances] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alliances') }})
    predicted_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predicted_time') }})
    time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    winning_alliance: Optional[MatchSimpleWinningAllianceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('winning_alliance') }})
    
