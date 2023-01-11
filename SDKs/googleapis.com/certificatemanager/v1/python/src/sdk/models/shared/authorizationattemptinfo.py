import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AuthorizationAttemptInfoFailureReasonEnum(str, Enum):
    FAILURE_REASON_UNSPECIFIED = "FAILURE_REASON_UNSPECIFIED"
    CONFIG = "CONFIG"
    CAA = "CAA"
    RATE_LIMITED = "RATE_LIMITED"

class AuthorizationAttemptInfoStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    AUTHORIZING = "AUTHORIZING"
    AUTHORIZED = "AUTHORIZED"
    FAILED = "FAILED"


@dataclass_json
@dataclasses.dataclass
class AuthorizationAttemptInfo:
    r"""AuthorizationAttemptInfo
    State of the latest attempt to authorize a domain for certificate issuance.
    """
    
    details: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    domain: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    failure_reason: Optional[AuthorizationAttemptInfoFailureReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    state: Optional[AuthorizationAttemptInfoStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
