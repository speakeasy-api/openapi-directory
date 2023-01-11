import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import googleexamplelibraryagentv1book as shared_googleexamplelibraryagentv1book


@dataclass_json
@dataclasses.dataclass
class GoogleExampleLibraryagentV1ListBooksResponse:
    r"""GoogleExampleLibraryagentV1ListBooksResponse
    Response message for LibraryAgent.ListBooks.
    """
    
    books: Optional[list[shared_googleexamplelibraryagentv1book.GoogleExampleLibraryagentV1Book]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('books') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
