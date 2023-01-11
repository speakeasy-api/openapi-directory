import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import assignedtargetingoption as shared_assignedtargetingoption


@dataclass_json
@dataclasses.dataclass
class BulkEditAdvertiserAssignedTargetingOptionsResponse:
    created_assigned_targeting_options: Optional[list[shared_assignedtargetingoption.AssignedTargetingOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAssignedTargetingOptions') }})
    
