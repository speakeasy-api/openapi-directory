import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DestinationStatusStatusEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    ACTIVE = "ACTIVE"
    PENDING = "PENDING"
    DISAPPROVED = "DISAPPROVED"


@dataclass_json
@dataclasses.dataclass
class DestinationStatus:
    r"""DestinationStatus
    The destination status.
    """
    
    destination: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destination') }})
    status: Optional[DestinationStatusStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
