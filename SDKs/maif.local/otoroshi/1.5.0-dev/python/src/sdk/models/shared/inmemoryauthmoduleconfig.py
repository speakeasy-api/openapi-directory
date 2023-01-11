import dataclasses
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import inmemoryuser as shared_inmemoryuser


@dataclass_json
@dataclasses.dataclass
class InMemoryAuthModuleConfig:
    r"""InMemoryAuthModuleConfig
    Settings to authenticate users using the in memory user store
    """
    
    desc: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('desc') }})
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    session_max_age: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionMaxAge') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    users: list[shared_inmemoryuser.InMemoryUser] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
