import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import booleancondition as shared_booleancondition


@dataclass_json
@dataclasses.dataclass
class PivotFilterCriteria:
    condition: Optional[shared_booleancondition.BooleanCondition] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    visible_by_default: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibleByDefault') }})
    visible_values: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('visibleValues') }})
    
