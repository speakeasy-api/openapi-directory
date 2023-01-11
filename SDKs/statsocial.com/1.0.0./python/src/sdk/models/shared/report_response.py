import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import combined_age as shared_combined_age
from ..shared import sex as shared_sex


@dataclass_json
@dataclasses.dataclass
class ReportResponse:
    combined_age: Optional[shared_combined_age.CombinedAge] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Combined Age') }})
    sex: Optional[shared_sex.Sex] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sex') }})
    
