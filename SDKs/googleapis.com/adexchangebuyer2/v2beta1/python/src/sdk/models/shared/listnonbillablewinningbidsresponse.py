import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import nonbillablewinningbidstatusrow as shared_nonbillablewinningbidstatusrow


@dataclass_json
@dataclasses.dataclass
class ListNonBillableWinningBidsResponse:
    r"""ListNonBillableWinningBidsResponse
    Response message for listing all reasons for which a buyer was not billed for a winning bid.
    """
    
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    non_billable_winning_bid_status_rows: Optional[list[shared_nonbillablewinningbidstatusrow.NonBillableWinningBidStatusRow]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nonBillableWinningBidStatusRows') }})
    
