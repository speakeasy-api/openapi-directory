import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RevokeCertificateRequestReasonEnum(str, Enum):
    REVOCATION_REASON_UNSPECIFIED = "REVOCATION_REASON_UNSPECIFIED"
    KEY_COMPROMISE = "KEY_COMPROMISE"
    CERTIFICATE_AUTHORITY_COMPROMISE = "CERTIFICATE_AUTHORITY_COMPROMISE"
    AFFILIATION_CHANGED = "AFFILIATION_CHANGED"
    SUPERSEDED = "SUPERSEDED"
    CESSATION_OF_OPERATION = "CESSATION_OF_OPERATION"
    CERTIFICATE_HOLD = "CERTIFICATE_HOLD"
    PRIVILEGE_WITHDRAWN = "PRIVILEGE_WITHDRAWN"
    ATTRIBUTE_AUTHORITY_COMPROMISE = "ATTRIBUTE_AUTHORITY_COMPROMISE"


@dataclass_json
@dataclasses.dataclass
class RevokeCertificateRequest:
    r"""RevokeCertificateRequest
    Request message for CertificateAuthorityService.RevokeCertificate.
    """
    
    reason: Optional[RevokeCertificateRequestReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    request_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
