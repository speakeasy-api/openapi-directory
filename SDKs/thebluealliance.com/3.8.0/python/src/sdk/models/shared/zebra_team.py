import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ZebraTeam:
    team_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_key') }})
    xs: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('xs') }})
    ys: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ys') }})
    
