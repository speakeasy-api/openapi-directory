import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import personalnamein as shared_personalnamein


@dataclass_json
@dataclasses.dataclass
class BatchPersonalNameIn:
    personal_names: Optional[list[shared_personalnamein.PersonalNameIn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    
