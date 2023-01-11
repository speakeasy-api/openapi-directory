import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import availablenumber as shared_availablenumber


@dataclass_json
@dataclasses.dataclass
class AvailableNumbers:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    numbers: Optional[list[shared_availablenumber.Availablenumber]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numbers') }})
    
