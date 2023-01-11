import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2LockStatus:
    r"""GoogleAppsDriveLabelsV2LockStatus
    Contains information about whether a label component should be considered locked.
    """
    
    locked: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    
