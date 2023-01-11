import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificatemap as shared_certificatemap


@dataclass_json
@dataclasses.dataclass
class ListCertificateMapsResponse:
    r"""ListCertificateMapsResponse
    Response for the `ListCertificateMaps` method.
    """
    
    certificate_maps: Optional[list[shared_certificatemap.CertificateMap]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateMaps') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
