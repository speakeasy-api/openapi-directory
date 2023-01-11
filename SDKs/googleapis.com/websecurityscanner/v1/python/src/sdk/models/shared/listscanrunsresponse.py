import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import scanrun as shared_scanrun


@dataclass_json
@dataclasses.dataclass
class ListScanRunsResponse:
    r"""ListScanRunsResponse
    Response for the `ListScanRuns` method.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    scan_runs: Optional[list[shared_scanrun.ScanRun]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scanRuns') }})
    
