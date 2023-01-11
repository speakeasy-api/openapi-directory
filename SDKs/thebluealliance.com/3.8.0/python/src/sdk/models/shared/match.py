import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import match_alliance as shared_match_alliance


@dataclass_json
@dataclasses.dataclass
class MatchAlliances:
    r"""MatchAlliances
    A list of alliances, the teams on the alliances, and their score.
    """
    
    blue: Optional[shared_match_alliance.MatchAlliance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blue') }})
    red: Optional[shared_match_alliance.MatchAlliance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('red') }})
    
class MatchCompLevelEnum(str, Enum):
    QM = "qm"
    EF = "ef"
    QF = "qf"
    SF = "sf"
    F = "f"


@dataclass_json
@dataclasses.dataclass
class MatchVideos:
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
class MatchWinningAllianceEnum(str, Enum):
    RED = "red"
    BLUE = "blue"
    UNKNOWN = ""


@dataclass_json
@dataclasses.dataclass
class Match:
    comp_level: MatchCompLevelEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('comp_level') }})
    event_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_key') }})
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    match_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('match_number') }})
    set_number: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('set_number') }})
    actual_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actual_time') }})
    alliances: Optional[MatchAlliances] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alliances') }})
    post_result_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('post_result_time') }})
    predicted_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predicted_time') }})
    score_breakdown: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score_breakdown') }})
    time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    videos: Optional[list[MatchVideos]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('videos') }})
    winning_alliance: Optional[MatchWinningAllianceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('winning_alliance') }})
    
