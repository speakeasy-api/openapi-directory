import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import corridorout as shared_corridorout


@dataclass_json
@dataclasses.dataclass
class BatchCorridorOut:
    corridor_from_to: Optional[list[shared_corridorout.CorridorOut]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corridorFromTo') }})
    
