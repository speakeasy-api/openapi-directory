import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import firstlastnamegeoin as shared_firstlastnamegeoin


@dataclass_json
@dataclasses.dataclass
class BatchFirstLastNameGeoIn:
    personal_names: Optional[list[shared_firstlastnamegeoin.FirstLastNameGeoIn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalNames') }})
    
