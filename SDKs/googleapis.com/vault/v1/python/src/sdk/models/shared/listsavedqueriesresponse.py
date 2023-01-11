import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import savedquery as shared_savedquery


@dataclass_json
@dataclasses.dataclass
class ListSavedQueriesResponse:
    r"""ListSavedQueriesResponse
    Definition of the response for method ListSaveQuery.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    saved_queries: Optional[list[shared_savedquery.SavedQuery]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savedQueries') }})
    
