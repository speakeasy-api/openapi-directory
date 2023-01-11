import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subordinateconfig as shared_subordinateconfig


@dataclass_json
@dataclasses.dataclass
class ActivateCertificateAuthorityRequest:
    r"""ActivateCertificateAuthorityRequest
    Request message for CertificateAuthorityService.ActivateCertificateAuthority.
    """
    
    pem_ca_certificate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pemCaCertificate') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    subordinate_config: Optional[shared_subordinateconfig.SubordinateConfig] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subordinateConfig') }})
    
