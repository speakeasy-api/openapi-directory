import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import leaderboardconfigurationdetail as shared_leaderboardconfigurationdetail

class LeaderboardConfigurationScoreOrderEnum(str, Enum):
    SCORE_ORDER_UNSPECIFIED = "SCORE_ORDER_UNSPECIFIED"
    LARGER_IS_BETTER = "LARGER_IS_BETTER"
    SMALLER_IS_BETTER = "SMALLER_IS_BETTER"


@dataclass_json
@dataclasses.dataclass
class LeaderboardConfiguration:
    r"""LeaderboardConfiguration
    An leaderboard configuration resource.
    """
    
    draft: Optional[shared_leaderboardconfigurationdetail.LeaderboardConfigurationDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('draft') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    published: Optional[shared_leaderboardconfigurationdetail.LeaderboardConfigurationDetail] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('published') }})
    score_max: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreMax') }})
    score_min: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreMin') }})
    score_order: Optional[LeaderboardConfigurationScoreOrderEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoreOrder') }})
    token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
