import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import addressautocompletehiturls as shared_addressautocompletehiturls


@dataclass_json
@dataclasses.dataclass
class AddressAutocompleteHit:
    suggestion: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestion') }})
    udprn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('udprn') }})
    umprn: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('umprn') }})
    urls: Optional[shared_addressautocompletehiturls.AddressAutocompleteHitUrls] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('urls') }})
    
