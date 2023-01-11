import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificateattributes as shared_certificateattributes


@dataclass_json
@dataclasses.dataclass
class EndpointVerificationSpecificAttributes:
    r"""EndpointVerificationSpecificAttributes
    Resource representing the Endpoint Verification-specific attributes of a Device. https://cloud.google.com/endpoint-verification/docs/overview
    """
    
    certificate_attributes: Optional[list[shared_certificateattributes.CertificateAttributes]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateAttributes') }})
    
