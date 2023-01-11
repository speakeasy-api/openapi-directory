import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import x509certificatedetails as shared_x509certificatedetails

class PublicKeyCertificateFormatEnum(str, Enum):
    UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT = "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT"
    X509_CERTIFICATE_PEM = "X509_CERTIFICATE_PEM"


@dataclass_json
@dataclasses.dataclass
class PublicKeyCertificate:
    r"""PublicKeyCertificate
    A public key certificate format and data.
    """
    
    certificate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificate') }})
    format: Optional[PublicKeyCertificateFormatEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    x509_details: Optional[shared_x509certificatedetails.X509CertificateDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x509Details') }})
    
