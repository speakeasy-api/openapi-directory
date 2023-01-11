import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import priceperbuyer as shared_priceperbuyer


@dataclass_json
@dataclasses.dataclass
class DealTermsNonGuaranteedAuctionTerms:
    auto_optimize_private_auction: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoOptimizePrivateAuction') }})
    reserve_price_per_buyers: Optional[list[shared_priceperbuyer.PricePerBuyer]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reservePricePerBuyers') }})
    
