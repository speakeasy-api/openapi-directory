import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ActionActionEnum(str, Enum):
    NULL = "null"
    TRIAL = "trial"
    PLAN = "plan"
    SUBSCRIBE = "subscribe"


@dataclass_json
@dataclasses.dataclass
class Action:
    action: Optional[ActionActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    
