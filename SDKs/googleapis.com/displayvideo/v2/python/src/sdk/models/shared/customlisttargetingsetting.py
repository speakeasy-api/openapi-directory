import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CustomListTargetingSetting:
    r"""CustomListTargetingSetting
    Details of custom list targeting setting.
    """
    
    custom_list_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customListId') }})
    
