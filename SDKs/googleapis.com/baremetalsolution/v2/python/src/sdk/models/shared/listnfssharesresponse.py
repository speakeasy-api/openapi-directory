import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nfsshare as shared_nfsshare


@dataclass_json
@dataclasses.dataclass
class ListNfsSharesResponse:
    r"""ListNfsSharesResponse
    Response message containing the list of NFS shares.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    nfs_shares: Optional[list[shared_nfsshare.NfsShare]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nfsShares') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
