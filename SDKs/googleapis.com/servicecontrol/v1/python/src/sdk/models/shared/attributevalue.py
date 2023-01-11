import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import truncatablestring as shared_truncatablestring


@dataclass_json
@dataclasses.dataclass
class AttributeValue:
    bool_value: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boolValue') }})
    int_value: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intValue') }})
    string_value: Optional[shared_truncatablestring.TruncatableString] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    
