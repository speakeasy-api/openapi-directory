import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import wlt_record as shared_wlt_record


@dataclass_json
@dataclasses.dataclass
class TeamEventStatusRankRanking:
    dq: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dq') }})
    matches_played: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches_played') }})
    qual_average: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qual_average') }})
    rank: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    record: Optional[shared_wlt_record.WltRecord] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('record') }})
    sort_orders: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort_orders') }})
    team_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_key') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamEventStatusRankSortOrderInfo:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    precision: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    

@dataclass_json
@dataclasses.dataclass
class TeamEventStatusRank:
    num_teams: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_teams') }})
    ranking: Optional[TeamEventStatusRankRanking] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranking') }})
    sort_order_info: Optional[list[TeamEventStatusRankSortOrderInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort_order_info') }})
    status: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
