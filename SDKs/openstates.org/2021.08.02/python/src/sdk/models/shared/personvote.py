import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import compactperson as shared_compactperson


@dataclass_json
@dataclasses.dataclass
class PersonVote:
    option: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('option') }})
    voter_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('voter_name') }})
    voter: Optional[shared_compactperson.CompactPerson] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voter') }})
    
