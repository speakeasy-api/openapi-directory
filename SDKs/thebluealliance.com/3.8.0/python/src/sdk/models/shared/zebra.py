import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import zebra_team as shared_zebra_team


@dataclass_json
@dataclasses.dataclass
class ZebraAlliances:
    blue: Optional[list[shared_zebra_team.ZebraTeam]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blue') }})
    red: Optional[list[shared_zebra_team.ZebraTeam]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('red') }})
    

@dataclass_json
@dataclasses.dataclass
class Zebra:
    alliances: ZebraAlliances = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alliances') }})
    key: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    times: list[float] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('times') }})
    
