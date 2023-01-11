import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compactperson as shared_compactperson


@dataclass_json
@dataclasses.dataclass
class CommitteeMembership:
    person_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('person_name') }})
    role: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    person: Optional[shared_compactperson.CompactPerson] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    
