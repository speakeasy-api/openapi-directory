import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse:
    r"""GoogleFirebaseAppcheckV1GenerateAppAttestChallengeResponse
    Response message for the GenerateAppAttestChallenge method.
    """
    
    challenge: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge') }})
    ttl: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    
