import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FailoverPropertyConditionStatusEnum(str, Enum):
    DELIVERED = "delivered"
    READ = "read"


@dataclass_json
@dataclasses.dataclass
class FailoverProperty:
    r"""FailoverProperty
    Please note that last message does not have failover attribute inside it. All other messages must contain a failover attribute.
    """
    
    condition_status: Optional[FailoverPropertyConditionStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition_status') }})
    expiry_time: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiry_time') }})
    
