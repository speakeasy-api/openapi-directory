import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ErrorValueTypeEnum(str, Enum):
    ERROR_TYPE_UNSPECIFIED = "ERROR_TYPE_UNSPECIFIED"
    ERROR = "ERROR"
    NULL_VALUE = "NULL_VALUE"
    DIVIDE_BY_ZERO = "DIVIDE_BY_ZERO"
    VALUE = "VALUE"
    REF = "REF"
    NAME = "NAME"
    NUM = "NUM"
    N_A = "N_A"
    LOADING = "LOADING"


@dataclass_json
@dataclasses.dataclass
class ErrorValue:
    r"""ErrorValue
    An error in a cell.
    """
    
    message: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    type: Optional[ErrorValueTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
