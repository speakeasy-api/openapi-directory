import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import personresponse as shared_personresponse


@dataclass_json
@dataclasses.dataclass
class BatchCreateContactsResponse:
    r"""BatchCreateContactsResponse
    If not successful, returns BatchCreateContactsErrorDetails which contains a list of errors for each invalid contact. The response to a request to create a batch of contacts.
    """
    
    created_people: Optional[list[shared_personresponse.PersonResponse]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdPeople') }})
    
