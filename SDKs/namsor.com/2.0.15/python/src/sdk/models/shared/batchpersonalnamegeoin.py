import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import personalnamegeoin as shared_personalnamegeoin


@dataclass_json
@dataclasses.dataclass
class BatchPersonalNameGeoIn:
    personal_names: Optional[list[shared_personalnamegeoin.PersonalNameGeoIn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    
