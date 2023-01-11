import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import personalnamegenderedout as shared_personalnamegenderedout


@dataclass_json
@dataclasses.dataclass
class BatchPersonalNameGenderedOut:
    personal_names: Optional[list[shared_personalnamegenderedout.PersonalNameGenderedOut]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    
