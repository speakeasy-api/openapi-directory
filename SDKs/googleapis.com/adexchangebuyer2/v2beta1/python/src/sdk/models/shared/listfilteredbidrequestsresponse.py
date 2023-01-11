import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import calloutstatusrow as shared_calloutstatusrow


@dataclass_json
@dataclasses.dataclass
class ListFilteredBidRequestsResponse:
    r"""ListFilteredBidRequestsResponse
    Response message for listing all reasons that bid requests were filtered and not sent to the buyer.
    """
    
    callout_status_rows: Optional[list[shared_calloutstatusrow.CalloutStatusRow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calloutStatusRows') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
