import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googlefirebaseappcheckv1appchecktoken as shared_googlefirebaseappcheckv1appchecktoken


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse:
    r"""GoogleFirebaseAppcheckV1ExchangeAppAttestAttestationResponse
    Response message for the ExchangeAppAttestAttestation method.
    """
    
    app_check_token: Optional[shared_googlefirebaseappcheckv1appchecktoken.GoogleFirebaseAppcheckV1AppCheckToken] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appCheckToken') }})
    artifact: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artifact') }})
    
