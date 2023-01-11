import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import adsize as shared_adsize


@dataclass_json
@dataclasses.dataclass
class CreativeSpecification:
    r"""CreativeSpecification
    Represents information for a creative that is associated with a Programmatic Guaranteed/Preferred Deal in Ad Manager.
    """
    
    creative_companion_sizes: Optional[list[shared_adsize.AdSize]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeCompanionSizes') }})
    creative_size: Optional[shared_adsize.AdSize] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creativeSize') }})
    
