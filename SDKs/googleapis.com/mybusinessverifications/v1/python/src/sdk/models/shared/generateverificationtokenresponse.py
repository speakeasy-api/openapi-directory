import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verificationtoken as shared_verificationtoken


@dataclass_json
@dataclasses.dataclass
class GenerateVerificationTokenResponse:
    r"""GenerateVerificationTokenResponse
    Response message for Verifications.GenerateVerificationToken.
    """
    
    token: Optional[shared_verificationtoken.VerificationToken] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    
