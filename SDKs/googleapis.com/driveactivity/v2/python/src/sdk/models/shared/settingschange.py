import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import restrictionchange as shared_restrictionchange


@dataclass_json
@dataclasses.dataclass
class SettingsChange:
    r"""SettingsChange
    Information about settings changes.
    """
    
    restriction_changes: Optional[list[shared_restrictionchange.RestrictionChange]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictionChanges') }})
    
