import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verification as shared_verification


@dataclass_json
@dataclasses.dataclass
class VerifyLocationResponse:
    r"""VerifyLocationResponse
    Response message for Verifications.VerifyLocation.
    """
    
    verification: Optional[shared_verification.Verification] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification') }})
    
