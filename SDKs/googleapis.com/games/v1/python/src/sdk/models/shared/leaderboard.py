import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LeaderboardOrderEnum(str, Enum):
    SCORE_ORDER_UNSPECIFIED = "SCORE_ORDER_UNSPECIFIED"
    LARGER_IS_BETTER = "LARGER_IS_BETTER"
    SMALLER_IS_BETTER = "SMALLER_IS_BETTER"


@dataclass_json
@dataclasses.dataclass
class Leaderboard:
    r"""Leaderboard
    The Leaderboard resource.
    """
    
    icon_url: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iconUrl') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_icon_url_default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isIconUrlDefault') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    order: Optional[LeaderboardOrderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    
