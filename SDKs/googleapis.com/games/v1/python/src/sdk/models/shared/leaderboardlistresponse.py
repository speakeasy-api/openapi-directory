import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import leaderboard as shared_leaderboard


@dataclass_json
@dataclasses.dataclass
class LeaderboardListResponse:
    r"""LeaderboardListResponse
    A list of leaderboard objects.
    """
    
    items: Optional[list[shared_leaderboard.Leaderboard]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
