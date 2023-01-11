import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstlastnamephonecodedout as shared_firstlastnamephonecodedout


@dataclass_json
@dataclasses.dataclass
class BatchFirstLastNamePhoneCodedOut:
    r"""BatchFirstLastNamePhoneCodedOut
    Represents the output of inferring the LIKELY country and phone code of personal names+phones.
    """
    
    personal_names_with_phone_numbers: Optional[list[shared_firstlastnamephonecodedout.FirstLastNamePhoneCodedOut]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNamesWithPhoneNumbers') }})
    
