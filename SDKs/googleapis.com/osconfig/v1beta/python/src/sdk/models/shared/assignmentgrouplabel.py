import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class AssignmentGroupLabel:
    r"""AssignmentGroupLabel
    Represents a group of VM intances that can be identified as having all these labels, for example \"env=prod and app=web\".
    """
    
    labels: Optional[dict[str, str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    
