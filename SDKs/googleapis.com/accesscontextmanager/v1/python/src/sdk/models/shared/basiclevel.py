import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import condition as shared_condition

class BasicLevelCombiningFunctionEnum(str, Enum):
    AND = "AND"
    OR = "OR"


@dataclass_json
@dataclasses.dataclass
class BasicLevel:
    r"""BasicLevel
    `BasicLevel` is an `AccessLevel` using a set of recommended features.
    """
    
    combining_function: Optional[BasicLevelCombiningFunctionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combiningFunction') }})
    conditions: Optional[list[shared_condition.Condition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    
