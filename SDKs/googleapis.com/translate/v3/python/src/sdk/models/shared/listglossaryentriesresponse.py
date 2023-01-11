import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import glossaryentry as shared_glossaryentry


@dataclass_json
@dataclasses.dataclass
class ListGlossaryEntriesResponse:
    r"""ListGlossaryEntriesResponse
    Response message for ListGlossaryEntries
    """
    
    glossary_entries: Optional[list[shared_glossaryentry.GlossaryEntry]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glossaryEntries') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
