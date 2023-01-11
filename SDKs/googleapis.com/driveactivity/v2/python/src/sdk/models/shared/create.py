import dataclasses
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import copy as shared_copy


@dataclass_json
@dataclasses.dataclass
class Create:
    r"""Create
    An object was created.
    """
    
    copy: Optional[shared_copy.Copy] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copy') }})
    new: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new') }})
    upload: Optional[dict[str, Any]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    
