import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VerifyChallengeResponseResultKeyTrustLevelEnum(str, Enum):
    KEY_TRUST_LEVEL_UNSPECIFIED = "KEY_TRUST_LEVEL_UNSPECIFIED"
    CHROME_OS_VERIFIED_MODE = "CHROME_OS_VERIFIED_MODE"
    CHROME_OS_DEVELOPER_MODE = "CHROME_OS_DEVELOPER_MODE"
    CHROME_BROWSER_HW_KEY = "CHROME_BROWSER_HW_KEY"
    CHROME_BROWSER_OS_KEY = "CHROME_BROWSER_OS_KEY"


@dataclass_json
@dataclasses.dataclass
class VerifyChallengeResponseResult:
    r"""VerifyChallengeResponseResult
    Result message for VerifiedAccess.VerifyChallengeResponse.
    """
    
    customer_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    device_permanent_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicePermanentId') }})
    device_signal: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSignal') }})
    key_trust_level: Optional[VerifyChallengeResponseResultKeyTrustLevelEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyTrustLevel') }})
    signed_public_key_and_challenge: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('signedPublicKeyAndChallenge') }})
    virtual_device_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualDeviceId') }})
    
