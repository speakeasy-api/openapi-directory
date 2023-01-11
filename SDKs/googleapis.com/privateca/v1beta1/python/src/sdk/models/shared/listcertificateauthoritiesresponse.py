import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificateauthority as shared_certificateauthority


@dataclass_json
@dataclasses.dataclass
class ListCertificateAuthoritiesResponse:
    r"""ListCertificateAuthoritiesResponse
    Response message for CertificateAuthorityService.ListCertificateAuthorities.
    """
    
    certificate_authorities: Optional[list[shared_certificateauthority.CertificateAuthority]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateAuthorities') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
