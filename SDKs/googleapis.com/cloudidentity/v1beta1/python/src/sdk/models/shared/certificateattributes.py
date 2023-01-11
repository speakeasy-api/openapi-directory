import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificatetemplate as shared_certificatetemplate

class CertificateAttributesValidationStateEnum(str, Enum):
    CERTIFICATE_VALIDATION_STATE_UNSPECIFIED = "CERTIFICATE_VALIDATION_STATE_UNSPECIFIED"
    VALIDATION_SUCCESSFUL = "VALIDATION_SUCCESSFUL"
    VALIDATION_FAILED = "VALIDATION_FAILED"


@dataclass_json
@dataclasses.dataclass
class CertificateAttributes:
    r"""CertificateAttributes
    Stores information about a certificate.
    """
    
    certificate_template: Optional[shared_certificatetemplate.CertificateTemplate] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateTemplate') }})
    fingerprint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    issuer: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    serial_number: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    subject: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    thumbprint: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thumbprint') }})
    validation_state: Optional[CertificateAttributesValidationStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationState') }})
    validity_expiration_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validityExpirationTime') }})
    validity_start_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validityStartTime') }})
    
