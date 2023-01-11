import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import leaderboardscorerank as shared_leaderboardscorerank

class PlayerLeaderboardScoreTimeSpanEnum(str, Enum):
    SCORE_TIME_SPAN_UNSPECIFIED = "SCORE_TIME_SPAN_UNSPECIFIED"
    ALL_TIME = "ALL_TIME"
    WEEKLY = "WEEKLY"
    DAILY = "DAILY"


@dataclass_json
@dataclasses.dataclass
class PlayerLeaderboardScore:
    r"""PlayerLeaderboardScore
    A player leaderboard score object.
    """
    
    friends_rank: Optional[shared_leaderboardscorerank.LeaderboardScoreRank] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendsRank') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    leaderboard_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leaderboard_id') }})
    public_rank: Optional[shared_leaderboardscorerank.LeaderboardScoreRank] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicRank') }})
    score_string: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreString') }})
    score_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreTag') }})
    score_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreValue') }})
    social_rank: Optional[shared_leaderboardscorerank.LeaderboardScoreRank] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('socialRank') }})
    time_span: Optional[PlayerLeaderboardScoreTimeSpanEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSpan') }})
    write_timestamp: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('writeTimestamp') }})
    
