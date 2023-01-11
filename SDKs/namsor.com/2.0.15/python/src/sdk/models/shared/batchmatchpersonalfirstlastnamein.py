import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import matchpersonalfirstlastnamein as shared_matchpersonalfirstlastnamein


@dataclass_json
@dataclasses.dataclass
class BatchMatchPersonalFirstLastNameIn:
    personal_names: Optional[list[shared_matchpersonalfirstlastnamein.MatchPersonalFirstLastNameIn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    
