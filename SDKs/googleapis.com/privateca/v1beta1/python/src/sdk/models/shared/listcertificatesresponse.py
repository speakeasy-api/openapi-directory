import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificate as shared_certificate


@dataclass_json
@dataclasses.dataclass
class ListCertificatesResponse:
    r"""ListCertificatesResponse
    Response message for CertificateAuthorityService.ListCertificates.
    """
    
    certificates: Optional[list[shared_certificate.Certificate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
