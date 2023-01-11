import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class Post:
    division_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('division_id') }})
    label: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    maximum_memberships: int = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximum_memberships') }})
    role: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    
