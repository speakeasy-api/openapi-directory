import dataclasses
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ManageEventActionEnum(str, Enum):
    CREATE = "create"
    FIRE = "fire"
    CHANGE = "change"
    DELETE = "delete"


@dataclass_json
@dataclasses.dataclass
class ManageEvent:
    action: Optional[ManageEventActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    action_params: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action_params') }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
