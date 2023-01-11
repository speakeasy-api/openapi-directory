import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import listfindingsresult as shared_listfindingsresult


@dataclass_json
@dataclasses.dataclass
class ListFindingsResponse:
    r"""ListFindingsResponse
    Response message for listing findings.
    """
    
    list_findings_results: Optional[list[shared_listfindingsresult.ListFindingsResult]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listFindingsResults') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    read_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readTime') }})
    total_size: Optional[int] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
