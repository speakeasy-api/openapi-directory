import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import groupresult as shared_groupresult


@dataclass_json
@dataclasses.dataclass
class GroupAssetsResponse:
    r"""GroupAssetsResponse
    Response message for grouping by assets.
    """
    
    group_by_results: Optional[list[shared_groupresult.GroupResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupByResults') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    read_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    
