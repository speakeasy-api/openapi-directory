import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import utilizationreport as shared_utilizationreport


@dataclass_json
@dataclasses.dataclass
class ListUtilizationReportsResponse:
    r"""ListUtilizationReportsResponse
    Response message for 'ListUtilizationReports' request.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    utilization_reports: Optional[list[shared_utilizationreport.UtilizationReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utilizationReports') }})
    
