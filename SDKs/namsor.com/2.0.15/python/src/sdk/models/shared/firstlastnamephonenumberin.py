import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstlastnameoriginedout as shared_firstlastnameoriginedout


@dataclass_json
@dataclasses.dataclass
class FirstLastNamePhoneNumberIn:
    first_last_name_origined_out: Optional[shared_firstlastnameoriginedout.FirstLastNameOriginedOut] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FirstLastNameOriginedOut') }})
    first_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    phone_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    
