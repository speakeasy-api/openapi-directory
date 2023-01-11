import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import reporttype as shared_reporttype


@dataclass_json
@dataclasses.dataclass
class ListReportTypesResponse:
    r"""ListReportTypesResponse
    Response message for ReportingService.ListReportTypes.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    report_types: Optional[list[shared_reporttype.ReportType]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTypes') }})
    
