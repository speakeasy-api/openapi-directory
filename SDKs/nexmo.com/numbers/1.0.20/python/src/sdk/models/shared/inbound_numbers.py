import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import ownednumber as shared_ownednumber


@dataclass_json
@dataclasses.dataclass
class InboundNumbers:
    count: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    numbers: Optional[list[shared_ownednumber.Ownednumber]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numbers') }})
    
