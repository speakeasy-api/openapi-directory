import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import person as shared_person


@dataclass_json
@dataclasses.dataclass
class DeleteContactPhotoResponse:
    r"""DeleteContactPhotoResponse
    The response for deleting a contact's photo.
    """
    
    person: Optional[shared_person.Person] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    
