import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import verificationoption as shared_verificationoption


@dataclass_json
@dataclasses.dataclass
class FetchVerificationOptionsResponse:
    r"""FetchVerificationOptionsResponse
    Response message for Verifications.FetchVerificationOptions.
    """
    
    options: Optional[list[shared_verificationoption.VerificationOption]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    
