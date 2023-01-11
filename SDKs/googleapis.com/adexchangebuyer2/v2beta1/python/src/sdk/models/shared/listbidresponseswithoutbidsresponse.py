import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import bidresponsewithoutbidsstatusrow as shared_bidresponsewithoutbidsstatusrow


@dataclass_json
@dataclasses.dataclass
class ListBidResponsesWithoutBidsResponse:
    r"""ListBidResponsesWithoutBidsResponse
    Response message for listing all reasons that bid responses were considered to have no applicable bids.
    """
    
    bid_response_without_bids_status_rows: Optional[list[shared_bidresponsewithoutbidsstatusrow.BidResponseWithoutBidsStatusRow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidResponseWithoutBidsStatusRows') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
