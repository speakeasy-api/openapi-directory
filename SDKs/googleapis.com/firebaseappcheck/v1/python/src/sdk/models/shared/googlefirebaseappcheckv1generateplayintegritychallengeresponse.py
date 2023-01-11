import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse:
    r"""GoogleFirebaseAppcheckV1GeneratePlayIntegrityChallengeResponse
    Response message for the GeneratePlayIntegrityChallenge method.
    """
    
    challenge: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge') }})
    ttl: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    
