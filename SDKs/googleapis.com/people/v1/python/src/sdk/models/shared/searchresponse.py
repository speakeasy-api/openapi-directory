import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import searchresult as shared_searchresult


@dataclass_json
@dataclasses.dataclass
class SearchResponse:
    r"""SearchResponse
    The response to a search request for the authenticated user, given a query.
    """
    
    results: Optional[list[shared_searchresult.SearchResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('results') }})
    
