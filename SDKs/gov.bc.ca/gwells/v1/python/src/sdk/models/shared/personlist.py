import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import registrationslist as shared_registrationslist


@dataclass_json
@dataclasses.dataclass
class PersonList:
    first_name: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    surname: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('surname') }})
    contact_cell: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_cell') }})
    contact_email: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_email') }})
    contact_tel: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_tel') }})
    person_guid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person_guid') }})
    registrations: Optional[list[shared_registrationslist.RegistrationsList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrations') }})
    
