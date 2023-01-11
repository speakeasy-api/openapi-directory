import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccountStateStatusEnum(str, Enum):
    ACCOUNT_STATUS_UNSPECIFIED = "ACCOUNT_STATUS_UNSPECIFIED"
    VERIFIED = "VERIFIED"
    UNVERIFIED = "UNVERIFIED"
    VERIFICATION_REQUESTED = "VERIFICATION_REQUESTED"


@dataclass_json
@dataclasses.dataclass
class AccountState:
    r"""AccountState
    Indicates status of the account, such as whether the account has been verified by Google.
    """
    
    status: Optional[AccountStateStatusEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
