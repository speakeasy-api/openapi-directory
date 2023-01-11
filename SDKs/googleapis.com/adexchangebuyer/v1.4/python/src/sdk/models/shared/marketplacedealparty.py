import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import buyer as shared_buyer
from ..shared import seller as shared_seller


@dataclass_json
@dataclasses.dataclass
class MarketplaceDealParty:
    buyer: Optional[shared_buyer.Buyer] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer') }})
    seller: Optional[shared_seller.Seller] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seller') }})
    
