import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import signeddata as shared_signeddata


@dataclass_json
@dataclasses.dataclass
class VerifyChallengeResponseRequest:
    r"""VerifyChallengeResponseRequest
    signed ChallengeResponse
    """
    
    challenge_response: Optional[shared_signeddata.SignedData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challengeResponse') }})
    expected_identity: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedIdentity') }})
    
