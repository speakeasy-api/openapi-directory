import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class MatchAlliance:
    score: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    team_keys: list[str] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_keys') }})
    dq_team_keys: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dq_team_keys') }})
    surrogate_team_keys: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('surrogate_team_keys') }})
    
