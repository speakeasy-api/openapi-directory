import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import appliedlabelchangedetail as shared_appliedlabelchangedetail


@dataclass_json
@dataclasses.dataclass
class AppliedLabelChange:
    r"""AppliedLabelChange
    Label changes that were made on the Target.
    """
    
    changes: Optional[list[shared_appliedlabelchangedetail.AppliedLabelChangeDetail]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changes') }})
    
