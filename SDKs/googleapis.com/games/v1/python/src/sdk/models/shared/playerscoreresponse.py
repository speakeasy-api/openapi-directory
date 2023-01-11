import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import playerscore as shared_playerscore

class PlayerScoreResponseBeatenScoreTimeSpansEnum(str, Enum):
    SCORE_TIME_SPAN_UNSPECIFIED = "SCORE_TIME_SPAN_UNSPECIFIED"
    ALL_TIME = "ALL_TIME"
    WEEKLY = "WEEKLY"
    DAILY = "DAILY"


@dataclass_json
@dataclasses.dataclass
class PlayerScoreResponse:
    r"""PlayerScoreResponse
    A list of leaderboard entry resources.
    """
    
    beaten_score_time_spans: Optional[list[PlayerScoreResponseBeatenScoreTimeSpansEnum]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('beatenScoreTimeSpans') }})
    formatted_score: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('formattedScore') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    leaderboard_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leaderboardId') }})
    score_tag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreTag') }})
    unbeaten_scores: Optional[list[shared_playerscore.PlayerScore]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unbeatenScores') }})
    
