import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import valuematcher as shared_valuematcher


@dataclass_json
@dataclasses.dataclass
class ListMatcher:
    r"""ListMatcher
    Specifies the way to match a list value.
    """
    
    one_of: Optional[shared_valuematcher.ValueMatcher] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oneOf') }})
    
