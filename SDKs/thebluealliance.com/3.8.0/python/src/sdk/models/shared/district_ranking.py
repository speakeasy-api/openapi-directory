import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class DistrictRankingEventPoints:
    alliance_points: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alliance_points') }})
    award_points: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('award_points') }})
    district_cmp: bool = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('district_cmp') }})
    elim_points: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('elim_points') }})
    event_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_key') }})
    qual_points: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('qual_points') }})
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class DistrictRanking:
    r"""DistrictRanking
    Rank of a team in a district.
    """
    
    point_total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('point_total') }})
    rank: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    team_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_key') }})
    event_points: Optional[list[DistrictRankingEventPoints]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_points') }})
    rookie_bonus: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rookie_bonus') }})
    
