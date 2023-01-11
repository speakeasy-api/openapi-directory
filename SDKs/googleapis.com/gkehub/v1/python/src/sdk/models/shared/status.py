import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class StatusCodeEnum(str, Enum):
    CODE_UNSPECIFIED = "CODE_UNSPECIFIED"
    OK = "OK"
    FAILED = "FAILED"
    UNKNOWN = "UNKNOWN"


@dataclass_json
@dataclasses.dataclass
class Status:
    r"""Status
    Status specifies state for the subcomponent.
    """
    
    code: Optional[StatusCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    description: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    
