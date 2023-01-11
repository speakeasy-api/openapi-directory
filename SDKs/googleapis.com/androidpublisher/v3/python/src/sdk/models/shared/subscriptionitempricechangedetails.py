import dataclasses
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import money as shared_money

class SubscriptionItemPriceChangeDetailsPriceChangeModeEnum(str, Enum):
    PRICE_CHANGE_MODE_UNSPECIFIED = "PRICE_CHANGE_MODE_UNSPECIFIED"
    PRICE_DECREASE = "PRICE_DECREASE"
    PRICE_INCREASE = "PRICE_INCREASE"

class SubscriptionItemPriceChangeDetailsPriceChangeStateEnum(str, Enum):
    PRICE_CHANGE_STATE_UNSPECIFIED = "PRICE_CHANGE_STATE_UNSPECIFIED"
    OUTSTANDING = "OUTSTANDING"
    CONFIRMED = "CONFIRMED"
    APPLIED = "APPLIED"


@dataclass_json
@dataclasses.dataclass
class SubscriptionItemPriceChangeDetails:
    r"""SubscriptionItemPriceChangeDetails
    Price change related information of a subscription item.
    """
    
    expected_new_price_charge_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expectedNewPriceChargeTime') }})
    new_price: Optional[shared_money.Money] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newPrice') }})
    price_change_mode: Optional[SubscriptionItemPriceChangeDetailsPriceChangeModeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceChangeMode') }})
    price_change_state: Optional[SubscriptionItemPriceChangeDetailsPriceChangeStateEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceChangeState') }})
    
