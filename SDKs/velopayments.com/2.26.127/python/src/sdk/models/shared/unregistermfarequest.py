import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UnregisterMfaRequestMfaTypeEnum(str, Enum):
    YUBIKEY = "YUBIKEY"
    TOTP = "TOTP"


@dataclass_json
@dataclasses.dataclass
class UnregisterMfaRequest:
    mfa_type: UnregisterMfaRequestMfaTypeEnum = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('mfaType') }})
    verification_code: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationCode') }})
    
