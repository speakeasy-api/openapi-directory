import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import restore as shared_restore


@dataclass_json
@dataclasses.dataclass
class ListRestoresResponse:
    r"""ListRestoresResponse
    Response message for ListRestores.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    restores: Optional[list[shared_restore.Restore]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restores') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
