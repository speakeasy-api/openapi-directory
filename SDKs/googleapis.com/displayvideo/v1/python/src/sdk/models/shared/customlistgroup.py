import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customlisttargetingsetting as shared_customlisttargetingsetting


@dataclass_json
@dataclasses.dataclass
class CustomListGroup:
    r"""CustomListGroup
    Details of custom list group. All custom list targeting settings are logically ‘OR’ of each other.
    """
    
    settings: Optional[list[shared_customlisttargetingsetting.CustomListTargetingSetting]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settings') }})
    
