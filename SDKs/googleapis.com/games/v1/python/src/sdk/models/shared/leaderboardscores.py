import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import leaderboardentry as shared_leaderboardentry


@dataclass_json
@dataclasses.dataclass
class LeaderboardScores:
    r"""LeaderboardScores
    A ListScores response.
    """
    
    items: Optional[list[shared_leaderboardentry.LeaderboardEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    num_scores: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numScores') }})
    player_score: Optional[shared_leaderboardentry.LeaderboardEntry] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playerScore') }})
    prev_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prevPageToken') }})
    
