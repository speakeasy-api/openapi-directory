import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import wlt_record as shared_wlt_record


@dataclass_json
@dataclasses.dataclass
class EventRankingExtraStatsInfo:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    precision: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    

@dataclass_json
@dataclasses.dataclass
class EventRankingRankings:
    dq: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dq') }})
    matches_played: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('matches_played') }})
    rank: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    record: shared_wlt_record.WltRecord = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('record') }})
    team_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_key') }})
    extra_stats: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extra_stats') }})
    qual_average: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qual_average') }})
    sort_orders: Optional[list[float]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort_orders') }})
    

@dataclass_json
@dataclasses.dataclass
class EventRankingSortOrderInfo:
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    precision: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('precision') }})
    

@dataclass_json
@dataclasses.dataclass
class EventRanking:
    rankings: list[EventRankingRankings] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rankings') }})
    sort_order_info: list[EventRankingSortOrderInfo] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sort_order_info') }})
    extra_stats_info: Optional[list[EventRankingExtraStatsInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extra_stats_info') }})
    
