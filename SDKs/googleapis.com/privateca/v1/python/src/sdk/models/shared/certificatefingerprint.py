import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class CertificateFingerprint:
    r"""CertificateFingerprint
    A group of fingerprints for the x509 certificate.
    """
    
    sha256_hash: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sha256Hash') }})
    
