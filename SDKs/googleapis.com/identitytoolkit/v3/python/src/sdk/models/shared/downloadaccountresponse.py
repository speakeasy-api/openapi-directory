import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import userinfo as shared_userinfo


@dataclass_json
@dataclasses.dataclass
class DownloadAccountResponse:
    r"""DownloadAccountResponse
    Response of downloading accounts in batch.
    """
    
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    users: Optional[list[shared_userinfo.UserInfo]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('users') }})
    
