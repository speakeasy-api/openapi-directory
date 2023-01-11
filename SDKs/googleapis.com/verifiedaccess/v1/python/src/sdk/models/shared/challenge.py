import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import signeddata as shared_signeddata


@dataclass_json
@dataclasses.dataclass
class Challenge:
    r"""Challenge
    Result message for VerifiedAccess.CreateChallenge.
    """
    
    alternative_challenge: Optional[shared_signeddata.SignedData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternativeChallenge') }})
    challenge: Optional[shared_signeddata.SignedData] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge') }})
    
