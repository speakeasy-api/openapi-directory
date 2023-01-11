import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import customlist as shared_customlist


@dataclass_json
@dataclasses.dataclass
class ListCustomListsResponse:
    custom_lists: Optional[list[shared_customlist.CustomList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customLists') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
