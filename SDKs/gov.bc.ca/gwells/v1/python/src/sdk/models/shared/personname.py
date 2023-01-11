import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import registrationsnumber as shared_registrationsnumber


@dataclass_json
@dataclasses.dataclass
class PersonName:
    name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    person_guid: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person_guid') }})
    registrations: Optional[list[shared_registrationsnumber.RegistrationsNumber]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrations') }})
    
