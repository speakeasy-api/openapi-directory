import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import person as shared_person


@dataclass_json
@dataclasses.dataclass
class SearchDirectoryPeopleResponse:
    r"""SearchDirectoryPeopleResponse
    The response to a request for people in the authenticated user's domain directory that match the specified query.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    people: Optional[list[shared_person.Person]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('people') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
