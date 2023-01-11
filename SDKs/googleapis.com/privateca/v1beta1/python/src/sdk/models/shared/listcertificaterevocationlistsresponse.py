import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificaterevocationlist as shared_certificaterevocationlist


@dataclass_json
@dataclasses.dataclass
class ListCertificateRevocationListsResponse:
    r"""ListCertificateRevocationListsResponse
    Response message for CertificateAuthorityService.ListCertificateRevocationLists.
    """
    
    certificate_revocation_lists: Optional[list[shared_certificaterevocationlist.CertificateRevocationList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateRevocationLists') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
