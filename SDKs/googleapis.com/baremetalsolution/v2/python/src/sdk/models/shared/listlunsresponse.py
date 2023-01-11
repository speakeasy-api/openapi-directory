import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import lun as shared_lun


@dataclass_json
@dataclasses.dataclass
class ListLunsResponse:
    r"""ListLunsResponse
    Response message containing the list of storage volume luns.
    """
    
    luns: Optional[list[shared_lun.Lun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('luns') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
