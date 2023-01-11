import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OperatingStatusCodeEnum(str, Enum):
    NORMAL = "NORMAL"
    NOTICE = "NOTICE"
    LIMITED = "LIMITED"
    CLOSED = "CLOSED"


@dataclass_json
@dataclasses.dataclass
class OperatingStatus:
    r"""OperatingStatus
    Current status of facility operations. The overall status of the facility, which can be: Normal Hours and Services, Facility Notice, Limited Hours and/or Services, or Closed. This field replaces active_status.
    """
    
    code: OperatingStatusCodeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    additional_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additional_info') }})
    
