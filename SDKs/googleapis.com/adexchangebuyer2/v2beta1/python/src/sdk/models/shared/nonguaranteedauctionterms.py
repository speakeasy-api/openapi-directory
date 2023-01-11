import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import priceperbuyer as shared_priceperbuyer


@dataclass_json
@dataclasses.dataclass
class NonGuaranteedAuctionTerms:
    r"""NonGuaranteedAuctionTerms
    Terms for Private Auctions. Note that Private Auctions can be created only by the seller, but they can be returned in a get or list request.
    """
    
    auto_optimize_private_auction: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoOptimizePrivateAuction') }})
    reserve_prices_per_buyer: Optional[list[shared_priceperbuyer.PricePerBuyer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservePricesPerBuyer') }})
    
