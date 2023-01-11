import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import person as shared_person


@dataclass_json
@dataclasses.dataclass
class ContactToCreateInput:
    r"""ContactToCreateInput
    A wrapper that contains the person data to populate a newly created source.
    """
    
    contact_person: Optional[shared_person.PersonInput] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactPerson') }})
    
