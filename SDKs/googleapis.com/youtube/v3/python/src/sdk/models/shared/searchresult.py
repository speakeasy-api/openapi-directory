import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import resourceid as shared_resourceid
from ..shared import searchresultsnippet as shared_searchresultsnippet


@dataclass_json
@dataclasses.dataclass
class SearchResult:
    r"""SearchResult
    A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request. While a search result points to a uniquely identifiable resource, like a video, it does not have its own persistent data.
    """
    
    etag: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    id: Optional[shared_resourceid.ResourceID] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    snippet: Optional[shared_searchresultsnippet.SearchResultSnippet] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snippet') }})
    
