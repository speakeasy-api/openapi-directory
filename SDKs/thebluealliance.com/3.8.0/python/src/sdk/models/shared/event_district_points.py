import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class EventDistrictPointsPoints:
    alliance_points: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alliance_points') }})
    award_points: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('award_points') }})
    elim_points: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('elim_points') }})
    qual_points: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('qual_points') }})
    total: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclasses.dataclass
class EventDistrictPointsTiebreakers:
    highest_qual_scores: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highest_qual_scores') }})
    qual_wins: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qual_wins') }})
    

@dataclass_json
@dataclasses.dataclass
class EventDistrictPoints:
    points: dict[str, EventDistrictPointsPoints] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    tiebreakers: Optional[dict[str, EventDistrictPointsTiebreakers]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tiebreakers') }})
    
