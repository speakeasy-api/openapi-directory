import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import label as shared_label


@dataclass_json
@dataclasses.dataclass
class FreeFormServiceItem:
    r"""FreeFormServiceItem
    Represents a free-form service offered by the merchant. These are services that are not exposed as part of our structure service data. The merchant manually enters the names for of such services via a geomerchant surface.
    """
    
    category: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    label: Optional[shared_label.Label] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    
