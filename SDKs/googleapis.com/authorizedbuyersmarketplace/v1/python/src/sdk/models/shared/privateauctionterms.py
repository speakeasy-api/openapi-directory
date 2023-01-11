import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import price as shared_price


@dataclass_json
@dataclasses.dataclass
class PrivateAuctionTerms:
    r"""PrivateAuctionTerms
    Pricing terms for Private Auctions.
    """
    
    floor_price: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floorPrice') }})
    open_auction_allowed: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openAuctionAllowed') }})
    

@dataclass_json
@dataclasses.dataclass
class PrivateAuctionTermsInput:
    r"""PrivateAuctionTermsInput
    Pricing terms for Private Auctions.
    """
    
    floor_price: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floorPrice') }})
    
