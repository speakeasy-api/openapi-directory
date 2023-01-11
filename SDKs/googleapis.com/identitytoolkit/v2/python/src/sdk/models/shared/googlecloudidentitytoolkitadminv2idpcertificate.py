import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class GoogleCloudIdentitytoolkitAdminV2IdpCertificate:
    r"""GoogleCloudIdentitytoolkitAdminV2IdpCertificate
    The IDP's certificate data to verify the signature in the SAMLResponse issued by the IDP.
    """
    
    x509_certificate: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x509Certificate') }})
    
