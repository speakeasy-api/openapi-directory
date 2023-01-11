import dataclasses
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CheckStatusEnum(str, Enum):
    CRITICAL = "Critical"
    WARNING = "Warning"
    OK = "Ok"


@dataclass_json
@dataclasses.dataclass
class Check:
    msg: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('msg') }})
    name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    status: CheckStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
