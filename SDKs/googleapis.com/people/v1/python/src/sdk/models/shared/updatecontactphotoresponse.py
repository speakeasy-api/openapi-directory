import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import person as shared_person


@dataclass_json
@dataclasses.dataclass
class UpdateContactPhotoResponse:
    r"""UpdateContactPhotoResponse
    The response for updating a contact's photo.
    """
    
    person: Optional[shared_person.Person] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person') }})
    
