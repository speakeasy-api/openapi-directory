import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class FixedBidStrategy:
    r"""FixedBidStrategy
    A strategy that uses a fixed bidding price.
    """
    
    bid_amount_micros: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bidAmountMicros') }})
    
