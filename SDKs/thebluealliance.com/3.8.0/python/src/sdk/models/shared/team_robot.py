import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class TeamRobot:
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    robot_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('robot_name') }})
    team_key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('team_key') }})
    year: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
