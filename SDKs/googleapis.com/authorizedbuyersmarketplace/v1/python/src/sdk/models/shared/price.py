import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import money as shared_money

class PriceTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    CPM = "CPM"
    CPD = "CPD"


@dataclass_json
@dataclasses.dataclass
class Price:
    r"""Price
    Represents a price and a pricing type for a deal.
    """
    
    amount: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    type: Optional[PriceTypeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
