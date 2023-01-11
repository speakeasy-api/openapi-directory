import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import location as shared_location


@dataclass_json
@dataclasses.dataclass
class MoveItemRequest:
    r"""MoveItemRequest
    Move an item in a form.
    """
    
    new_location: Optional[shared_location.Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newLocation') }})
    original_location: Optional[shared_location.Location] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalLocation') }})
    
