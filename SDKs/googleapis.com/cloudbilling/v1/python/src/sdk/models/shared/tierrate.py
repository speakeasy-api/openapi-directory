import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import money as shared_money


@dataclass_json
@dataclasses.dataclass
class TierRate:
    r"""TierRate
    The price rate indicating starting usage and its corresponding price.
    """
    
    start_usage_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startUsageAmount') }})
    unit_price: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unitPrice') }})
    
