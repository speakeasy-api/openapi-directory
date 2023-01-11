import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaAttestationTokenResponse:
    r"""GoogleFirebaseAppcheckV1betaAttestationTokenResponse
    Encapsulates an *App Check token*, which are used to access Firebase services protected by App Check.
    """
    
    attestation_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestationToken') }})
    ttl: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    
