import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ActionsActionEnum(str, Enum):
    EDIT = "edit"
    DELETE = "delete"
    TRIAL = "trial"
    PLAN = "plan"
    SUBSCRIBE = "subscribe"
    UNSUBSCRIBE = "unsubscribe"
    ARCHIVE = "archive"
    ACTIVATE = "activate"


@dataclass_json
@dataclasses.dataclass
class Actions:
    action: Optional[ActionsActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    label: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    
