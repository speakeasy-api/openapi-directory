import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import team_event_status_alliance as shared_team_event_status_alliance
from ..shared import team_event_status_playoff as shared_team_event_status_playoff
from ..shared import team_event_status_rank as shared_team_event_status_rank


@dataclass_json
@dataclasses.dataclass
class TeamEventStatus:
    alliance: Optional[shared_team_event_status_alliance.TeamEventStatusAlliance] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alliance') }})
    alliance_status_str: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alliance_status_str') }})
    last_match_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_match_key') }})
    next_match_key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_match_key') }})
    overall_status_str: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overall_status_str') }})
    playoff: Optional[shared_team_event_status_playoff.TeamEventStatusPlayoff] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playoff') }})
    playoff_status_str: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playoff_status_str') }})
    qual: Optional[shared_team_event_status_rank.TeamEventStatusRank] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('qual') }})
    
