import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import savedreport as shared_savedreport


@dataclass_json
@dataclasses.dataclass
class ListSavedReportsResponse:
    r"""ListSavedReportsResponse
    Response definition for the saved reports list rpc.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    saved_reports: Optional[list[shared_savedreport.SavedReport]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('savedReports') }})
    
