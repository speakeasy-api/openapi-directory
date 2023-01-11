import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import value as shared_value


@dataclass_json
@dataclasses.dataclass
class Row:
    cells: Optional[list[shared_value.Value]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cells') }})
    
