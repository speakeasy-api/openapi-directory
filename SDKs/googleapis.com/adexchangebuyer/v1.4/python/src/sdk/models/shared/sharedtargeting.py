import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import targetingvalue as shared_targetingvalue


@dataclass_json
@dataclasses.dataclass
class SharedTargeting:
    exclusions: Optional[list[shared_targetingvalue.TargetingValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusions') }})
    inclusions: Optional[list[shared_targetingvalue.TargetingValue]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inclusions') }})
    key: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    
