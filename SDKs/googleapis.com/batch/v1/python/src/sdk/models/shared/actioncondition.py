import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ActionCondition:
    r"""ActionCondition
    Conditions for actions to deal with task failures.
    """
    
    exit_codes: Optional[list[int]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exitCodes') }})
    
