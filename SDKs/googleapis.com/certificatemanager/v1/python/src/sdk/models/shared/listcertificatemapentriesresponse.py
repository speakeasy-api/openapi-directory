import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import certificatemapentry as shared_certificatemapentry


@dataclass_json
@dataclasses.dataclass
class ListCertificateMapEntriesResponse:
    r"""ListCertificateMapEntriesResponse
    Response for the `ListCertificateMapEntries` method.
    """
    
    certificate_map_entries: Optional[list[shared_certificatemapentry.CertificateMapEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('certificateMapEntries') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
