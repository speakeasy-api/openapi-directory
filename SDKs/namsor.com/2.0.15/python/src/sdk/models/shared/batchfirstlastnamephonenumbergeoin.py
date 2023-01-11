import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstlastnamephonenumbergeoin as shared_firstlastnamephonenumbergeoin


@dataclass_json
@dataclasses.dataclass
class BatchFirstLastNamePhoneNumberGeoIn:
    personal_names_with_phone_numbers: Optional[list[shared_firstlastnamephonenumbergeoin.FirstLastNamePhoneNumberGeoIn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNamesWithPhoneNumbers') }})
    
