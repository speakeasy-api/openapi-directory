import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import doublematcher as shared_doublematcher
from ..shared import listmatcher as shared_listmatcher
from ..shared import stringmatcher as shared_stringmatcher


@dataclass_json
@dataclasses.dataclass
class ValueMatcher:
    r"""ValueMatcher
    Specifies the way to match a ProtobufWkt::Value. Primitive values and ListValue are supported. StructValue is not supported and is always not matched. [#next-free-field: 7]
    """
    
    bool_match: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boolMatch') }})
    double_match: Optional[shared_doublematcher.DoubleMatcher] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doubleMatch') }})
    list_match: Optional[shared_listmatcher.ListMatcher] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listMatch') }})
    null_match: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nullMatch') }})
    present_match: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('presentMatch') }})
    string_match: Optional[shared_stringmatcher.StringMatcher] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringMatch') }})
    
