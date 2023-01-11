import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleidentityaccesscontextmanagerv1condition as shared_googleidentityaccesscontextmanagerv1condition

class GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum(str, Enum):
    AND = "AND"
    OR = "OR"


@dataclass_json
@dataclasses.dataclass
class GoogleIdentityAccesscontextmanagerV1BasicLevel:
    r"""GoogleIdentityAccesscontextmanagerV1BasicLevel
    `BasicLevel` is an `AccessLevel` using a set of recommended features.
    """
    
    combining_function: Optional[GoogleIdentityAccesscontextmanagerV1BasicLevelCombiningFunctionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combiningFunction') }})
    conditions: Optional[list[shared_googleidentityaccesscontextmanagerv1condition.GoogleIdentityAccesscontextmanagerV1Condition]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    
