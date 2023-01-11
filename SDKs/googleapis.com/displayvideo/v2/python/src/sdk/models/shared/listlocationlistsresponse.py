import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import locationlist as shared_locationlist


@dataclass_json
@dataclasses.dataclass
class ListLocationListsResponse:
    location_lists: Optional[list[shared_locationlist.LocationList]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationLists') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
