import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import authorizedcertificate as shared_authorizedcertificate


@dataclass_json
@dataclasses.dataclass
class ListAuthorizedCertificatesResponse:
    r"""ListAuthorizedCertificatesResponse
    Response message for AuthorizedCertificates.ListAuthorizedCertificates.
    """
    
    certificates: Optional[list[shared_authorizedcertificate.AuthorizedCertificate]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificates') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
