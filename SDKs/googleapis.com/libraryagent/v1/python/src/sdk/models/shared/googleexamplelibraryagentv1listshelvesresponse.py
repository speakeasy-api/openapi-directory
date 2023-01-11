import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleexamplelibraryagentv1shelf as shared_googleexamplelibraryagentv1shelf


@dataclass_json
@dataclasses.dataclass
class GoogleExampleLibraryagentV1ListShelvesResponse:
    r"""GoogleExampleLibraryagentV1ListShelvesResponse
    Response message for LibraryAgent.ListShelves.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    shelves: Optional[list[shared_googleexamplelibraryagentv1shelf.GoogleExampleLibraryagentV1Shelf]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shelves') }})
    
