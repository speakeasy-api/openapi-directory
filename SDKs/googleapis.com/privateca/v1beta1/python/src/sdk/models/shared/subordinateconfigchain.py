import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SubordinateConfigChain:
    r"""SubordinateConfigChain
    This message describes a subordinate CA's issuer certificate chain. This wrapper exists for compatibility reasons.
    """
    
    pem_certificates: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemCertificates') }})
    
