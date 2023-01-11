import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class IdentitytoolkitRelyingpartySendVerificationCodeResponse:
    r"""IdentitytoolkitRelyingpartySendVerificationCodeResponse
    Response for Identitytoolkit-SendVerificationCode
    """
    
    session_info: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionInfo') }})
    
