import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FailoverInstanceRequestDataProtectionModeEnum(str, Enum):
    DATA_PROTECTION_MODE_UNSPECIFIED = "DATA_PROTECTION_MODE_UNSPECIFIED"
    LIMITED_DATA_LOSS = "LIMITED_DATA_LOSS"
    FORCE_DATA_LOSS = "FORCE_DATA_LOSS"


@dataclass_json
@dataclasses.dataclass
class FailoverInstanceRequest:
    r"""FailoverInstanceRequest
    Request for Failover.
    """
    
    data_protection_mode: Optional[FailoverInstanceRequestDataProtectionModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataProtectionMode') }})
    
