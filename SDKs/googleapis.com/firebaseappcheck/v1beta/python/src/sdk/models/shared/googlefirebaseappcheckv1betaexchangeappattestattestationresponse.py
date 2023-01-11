import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1betaappchecktoken as shared_googlefirebaseappcheckv1betaappchecktoken
from ..shared import googlefirebaseappcheckv1betaattestationtokenresponse as shared_googlefirebaseappcheckv1betaattestationtokenresponse


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse:
    r"""GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse
    Response message for the ExchangeAppAttestAttestation method.
    """
    
    app_check_token: Optional[shared_googlefirebaseappcheckv1betaappchecktoken.GoogleFirebaseAppcheckV1betaAppCheckToken] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appCheckToken') }})
    artifact: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifact') }})
    attestation_token: Optional[shared_googlefirebaseappcheckv1betaattestationtokenresponse.GoogleFirebaseAppcheckV1betaAttestationTokenResponse] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestationToken') }})
    
