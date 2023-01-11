import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DataAccessOptionsLogModeEnum(str, Enum):
    LOG_MODE_UNSPECIFIED = "LOG_MODE_UNSPECIFIED"
    LOG_FAIL_CLOSED = "LOG_FAIL_CLOSED"


@dataclass_json
@dataclasses.dataclass
class DataAccessOptions:
    r"""DataAccessOptions
    Write a Data Access (Gin) log
    """
    
    log_mode: Optional[DataAccessOptionsLogModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logMode') }})
    
