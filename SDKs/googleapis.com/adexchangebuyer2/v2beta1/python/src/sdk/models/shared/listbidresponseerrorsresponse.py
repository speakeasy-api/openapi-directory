import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import calloutstatusrow as shared_calloutstatusrow


@dataclass_json
@dataclasses.dataclass
class ListBidResponseErrorsResponse:
    r"""ListBidResponseErrorsResponse
    Response message for listing all reasons that bid responses resulted in an error.
    """
    
    callout_status_rows: Optional[list[shared_calloutstatusrow.CalloutStatusRow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calloutStatusRows') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
