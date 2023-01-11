import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class UndeleteCertificateAuthorityRequest:
    r"""UndeleteCertificateAuthorityRequest
    Request message for CertificateAuthorityService.UndeleteCertificateAuthority.
    """
    
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
