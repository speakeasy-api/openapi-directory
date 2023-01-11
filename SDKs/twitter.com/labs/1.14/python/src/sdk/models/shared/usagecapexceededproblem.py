import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UsageCapExceededProblemPeriodEnum(str, Enum):
    DAILY = "Daily"
    MONTHLY = "Monthly"

class UsageCapExceededProblemScopeEnum(str, Enum):
    ACCOUNT = "Account"
    PRODUCT = "Product"


@dataclass_json
@dataclasses.dataclass
class UsageCapExceededProblem:
    r"""UsageCapExceededProblem
    A problem that indicates that a usage cap has been exceeded.
    """
    
    detail: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    title: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    period: Optional[UsageCapExceededProblemPeriodEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    scope: Optional[UsageCapExceededProblemScopeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    
