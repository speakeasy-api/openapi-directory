import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities:
    r"""GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities
    The capabilities a user has on this label's applied metadata.
    """
    
    can_apply: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canApply') }})
    can_read: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canRead') }})
    can_remove: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canRemove') }})
    
