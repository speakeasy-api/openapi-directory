import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Location:
    teams: list[dict[str, str]] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    tenant: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenant') }})
    
