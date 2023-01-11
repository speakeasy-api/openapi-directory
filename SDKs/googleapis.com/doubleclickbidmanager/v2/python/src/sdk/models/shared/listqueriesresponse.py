import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import query as shared_query


@dataclass_json
@dataclasses.dataclass
class ListQueriesResponse:
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    queries: Optional[list[shared_query.Query]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queries') }})
    
