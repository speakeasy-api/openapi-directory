import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class ScheduleDeleteCertificateAuthorityRequest:
    r"""ScheduleDeleteCertificateAuthorityRequest
    Request message for CertificateAuthorityService.ScheduleDeleteCertificateAuthority.
    """
    
    ignore_active_certificates: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreActiveCertificates') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
