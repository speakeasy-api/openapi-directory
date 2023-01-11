import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import filterset as shared_filterset


@dataclass_json
@dataclasses.dataclass
class ListFilterSetsResponse:
    r"""ListFilterSetsResponse
    Response message for listing filter sets.
    """
    
    filter_sets: Optional[list[shared_filterset.FilterSet]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterSets') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
