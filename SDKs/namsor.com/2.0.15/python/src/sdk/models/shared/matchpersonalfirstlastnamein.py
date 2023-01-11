import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstlastnamein as shared_firstlastnamein
from ..shared import personalnamein as shared_personalnamein


@dataclass_json
@dataclasses.dataclass
class MatchPersonalFirstLastNameIn:
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name1: Optional[shared_firstlastnamein.FirstLastNameIn] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name1') }})
    name2: Optional[shared_personalnamein.PersonalNameIn] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name2') }})
    
