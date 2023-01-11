import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import passwordstatus as shared_passwordstatus


@dataclass_json
@dataclasses.dataclass
class UserPasswordValidationPolicy:
    r"""UserPasswordValidationPolicy
    User level password validation policy.
    """
    
    allowed_failed_attempts: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowedFailedAttempts') }})
    enable_failed_attempts_check: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableFailedAttemptsCheck') }})
    enable_password_verification: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enablePasswordVerification') }})
    password_expiration_duration: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passwordExpirationDuration') }})
    status: Optional[shared_passwordstatus.PasswordStatus] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
