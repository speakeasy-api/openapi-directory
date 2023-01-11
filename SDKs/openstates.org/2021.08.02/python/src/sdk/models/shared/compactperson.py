import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import currentrole as shared_currentrole


@dataclass_json
@dataclasses.dataclass
class CompactPerson:
    id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    party: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    current_role: Optional[shared_currentrole.CurrentRole] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_role') }})
    
