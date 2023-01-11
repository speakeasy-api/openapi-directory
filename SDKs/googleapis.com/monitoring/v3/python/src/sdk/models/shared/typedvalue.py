import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import distribution as shared_distribution


@dataclass_json
@dataclasses.dataclass
class TypedValue:
    bool_value: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boolValue') }})
    distribution_value: Optional[shared_distribution.Distribution] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distributionValue') }})
    double_value: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleValue') }})
    int64_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('int64Value') }})
    string_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
