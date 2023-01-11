import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import personalnameparsedout as shared_personalnameparsedout


@dataclass_json
@dataclasses.dataclass
class BatchPersonalNameParsedOut:
    personal_names: Optional[list[shared_personalnameparsedout.PersonalNameParsedOut]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    
