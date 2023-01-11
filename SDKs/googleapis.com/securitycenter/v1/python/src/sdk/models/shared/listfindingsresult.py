import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import finding as shared_finding
from ..shared import resource as shared_resource

class ListFindingsResultStateChangeEnum(str, Enum):
    UNUSED = "UNUSED"
    CHANGED = "CHANGED"
    UNCHANGED = "UNCHANGED"
    ADDED = "ADDED"
    REMOVED = "REMOVED"


@dataclass_json
@dataclasses.dataclass
class ListFindingsResult:
    r"""ListFindingsResult
    Result containing the Finding and its StateChange.
    """
    
    finding: Optional[shared_finding.Finding] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finding') }})
    resource: Optional[shared_resource.Resource] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    state_change: Optional[ListFindingsResultStateChangeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChange') }})
    
