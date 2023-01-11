import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import item as shared_item
from ..shared import location as shared_location


@dataclass_json
@dataclasses.dataclass
class CreateItemRequestInput:
    r"""CreateItemRequestInput
    Create an item in a form.
    """
    
    item: Optional[shared_item.ItemInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    location: Optional[shared_location.Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    
