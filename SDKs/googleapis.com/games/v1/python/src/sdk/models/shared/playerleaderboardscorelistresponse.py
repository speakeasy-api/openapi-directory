import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import playerleaderboardscore as shared_playerleaderboardscore
from ..shared import player as shared_player


@dataclass_json
@dataclasses.dataclass
class PlayerLeaderboardScoreListResponse:
    r"""PlayerLeaderboardScoreListResponse
    A list of player leaderboard scores.
    """
    
    items: Optional[list[shared_playerleaderboardscore.PlayerLeaderboardScore]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    player: Optional[shared_player.Player] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('player') }})
    
