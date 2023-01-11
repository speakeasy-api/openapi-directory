import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstlastnamegeozippedin as shared_firstlastnamegeozippedin


@dataclass_json
@dataclasses.dataclass
class BatchFirstLastNameGeoZippedIn:
    personal_names: Optional[list[shared_firstlastnamegeozippedin.FirstLastNameGeoZippedIn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    
