import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import biddingfunction as shared_biddingfunction


@dataclass_json
@dataclasses.dataclass
class ListBiddingFunctionsResponse:
    r"""ListBiddingFunctionsResponse
    A response containing a list of a bidder's bidding functions.
    """
    
    bidding_functions: Optional[list[shared_biddingfunction.BiddingFunction]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('biddingFunctions') }})
    next_page_token: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
