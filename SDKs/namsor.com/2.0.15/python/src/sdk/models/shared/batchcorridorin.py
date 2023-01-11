import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import corridorin as shared_corridorin


@dataclass_json
@dataclasses.dataclass
class BatchCorridorIn:
    corridor_from_to: Optional[list[shared_corridorin.CorridorIn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('corridorFromTo') }})
    
