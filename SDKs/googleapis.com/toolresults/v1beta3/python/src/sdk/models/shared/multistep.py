import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import primarystep as shared_primarystep


@dataclass_json
@dataclasses.dataclass
class MultiStep:
    r"""MultiStep
    Details when multiple steps are run with the same configuration as a group.
    """
    
    multistep_number: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('multistepNumber') }})
    primary_step: Optional[shared_primarystep.PrimaryStep] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryStep') }})
    primary_step_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryStepId') }})
    
