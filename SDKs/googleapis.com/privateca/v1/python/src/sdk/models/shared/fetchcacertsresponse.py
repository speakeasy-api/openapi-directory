import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certchain as shared_certchain


@dataclass_json
@dataclasses.dataclass
class FetchCaCertsResponse:
    r"""FetchCaCertsResponse
    Response message for CertificateAuthorityService.FetchCaCerts.
    """
    
    ca_certs: Optional[list[shared_certchain.CertChain]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caCerts') }})
    
