import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import personalnamegeoout as shared_personalnamegeoout


@dataclass_json
@dataclasses.dataclass
class BatchPersonalNameGeoOut:
    personal_names: Optional[list[shared_personalnamegeoout.PersonalNameGeoOut]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    
