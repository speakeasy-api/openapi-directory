import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest:
    r"""GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationRequest
    Request message for the ExchangeAppAttestAttestation method.
    """
    
    attestation_statement: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attestationStatement') }})
    challenge: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('challenge') }})
    key_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyId') }})
    
