import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import gridrange as shared_gridrange
from ..shared import datavalidationrule as shared_datavalidationrule


@dataclass_json
@dataclasses.dataclass
class SetDataValidationRequest:
    r"""SetDataValidationRequest
    Sets a data validation rule to every cell in the range. To clear validation in a range, call this with no rule specified.
    """
    
    range: Optional[shared_gridrange.GridRange] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    rule: Optional[shared_datavalidationrule.DataValidationRule] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rule') }})
    
