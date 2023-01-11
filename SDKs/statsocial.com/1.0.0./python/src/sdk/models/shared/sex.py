import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import female as shared_female
from ..shared import male as shared_male


@dataclass_json
@dataclasses.dataclass
class Sex:
    female: Optional[shared_female.Female] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Female') }})
    male: Optional[shared_male.Male] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Male') }})
    
