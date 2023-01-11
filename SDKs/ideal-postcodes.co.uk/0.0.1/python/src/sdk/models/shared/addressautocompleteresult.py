import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addressautocompletehit as shared_addressautocompletehit


@dataclass_json
@dataclasses.dataclass
class AddressAutocompleteResult:
    hits: Optional[list[shared_addressautocompletehit.AddressAutocompleteHit]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hits') }})
    
