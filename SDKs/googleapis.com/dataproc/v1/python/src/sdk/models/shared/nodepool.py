import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class NodePoolRepairActionEnum(str, Enum):
    REPAIR_ACTION_UNSPECIFIED = "REPAIR_ACTION_UNSPECIFIED"
    DELETE = "DELETE"


@dataclass_json
@dataclasses.dataclass
class NodePool:
    r"""NodePool
    indicating a list of workers of same type
    """
    
    id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    instance_names: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceNames') }})
    repair_action: Optional[NodePoolRepairActionEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repairAction') }})
    
