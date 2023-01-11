import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SandboxItemSetVerificationStatusRequestVerificationStatusEnum(str, Enum):
    AUTOMATICALLY_VERIFIED = "automatically_verified"
    VERIFICATION_EXPIRED = "verification_expired"


@dataclass_json
@dataclasses.dataclass
class SandboxItemSetVerificationStatusRequest:
    r"""SandboxItemSetVerificationStatusRequest
    SandboxItemSetVerificationStatusRequest defines the request schema for `/sandbox/item/set_verification_status`
    """
    
    access_token: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    account_id: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    verification_status: SandboxItemSetVerificationStatusRequestVerificationStatusEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification_status') }})
    client_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
