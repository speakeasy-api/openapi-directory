import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import contactgroup as shared_contactgroup


@dataclass_json
@dataclasses.dataclass
class CreateContactGroupRequestInput:
    r"""CreateContactGroupRequestInput
    A request to create a new contact group.
    """
    
    contact_group: Optional[shared_contactgroup.ContactGroupInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactGroup') }})
    read_group_fields: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readGroupFields') }})
    
