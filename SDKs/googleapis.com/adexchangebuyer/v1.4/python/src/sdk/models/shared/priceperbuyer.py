import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import buyer as shared_buyer
from ..shared import price as shared_price


@dataclass_json
@dataclasses.dataclass
class PricePerBuyer:
    r"""PricePerBuyer
    Used to specify pricing rules for buyers. Each PricePerBuyer in a product can become [0,1] deals. To check if there is a PricePerBuyer for a particular buyer we look for the most specific matching rule - we first look for a rule matching the buyer and otherwise look for a matching rule where no buyer is set.
    """
    
    auction_tier: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auctionTier') }})
    billed_buyer: Optional[shared_buyer.Buyer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billedBuyer') }})
    buyer: Optional[shared_buyer.Buyer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer') }})
    price: Optional[shared_price.Price] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
