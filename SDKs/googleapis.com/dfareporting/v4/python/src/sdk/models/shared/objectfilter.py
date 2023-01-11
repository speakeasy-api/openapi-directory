import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ObjectFilterStatusEnum(str, Enum):
    NONE = "NONE"
    ASSIGNED = "ASSIGNED"
    ALL = "ALL"


@dataclass_json
@dataclasses.dataclass
class ObjectFilter:
    r"""ObjectFilter
    Object Filter.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    object_ids: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectIds') }})
    status: Optional[ObjectFilterStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
