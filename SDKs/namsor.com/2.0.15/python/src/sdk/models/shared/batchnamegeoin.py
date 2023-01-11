import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import namegeoin as shared_namegeoin


@dataclass_json
@dataclasses.dataclass
class BatchNameGeoIn:
    proper_nouns: Optional[list[shared_namegeoin.NameGeoIn]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('properNouns') }})
    
