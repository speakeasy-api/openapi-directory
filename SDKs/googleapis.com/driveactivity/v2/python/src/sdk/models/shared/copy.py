import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import targetreference as shared_targetreference


@dataclass_json
@dataclasses.dataclass
class Copy:
    r"""Copy
    An object was created by copying an existing object.
    """
    
    original_object: Optional[shared_targetreference.TargetReference] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalObject') }})
    
