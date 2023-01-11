import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import capool as shared_capool


@dataclass_json
@dataclasses.dataclass
class ListCaPoolsResponse:
    r"""ListCaPoolsResponse
    Response message for CertificateAuthorityService.ListCaPools.
    """
    
    ca_pools: Optional[list[shared_capool.CaPool]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caPools') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
