import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificatechains as shared_certificatechains

class KeyOperationAttestationFormatEnum(str, Enum):
    ATTESTATION_FORMAT_UNSPECIFIED = "ATTESTATION_FORMAT_UNSPECIFIED"
    CAVIUM_V1_COMPRESSED = "CAVIUM_V1_COMPRESSED"
    CAVIUM_V2_COMPRESSED = "CAVIUM_V2_COMPRESSED"


@dataclass_json
@dataclasses.dataclass
class KeyOperationAttestation:
    r"""KeyOperationAttestation
    Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
    """
    
    cert_chains: Optional[shared_certificatechains.CertificateChains] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certChains') }})
    content: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    format: Optional[KeyOperationAttestationFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    

@dataclass_json
@dataclasses.dataclass
class KeyOperationAttestationInput:
    r"""KeyOperationAttestationInput
    Contains an HSM-generated attestation about a key operation. For more information, see [Verifying attestations] (https://cloud.google.com/kms/docs/attest-key).
    """
    
    cert_chains: Optional[shared_certificatechains.CertificateChains] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certChains') }})
    
