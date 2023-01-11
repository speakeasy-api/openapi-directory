import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptionitempricechangedetails as shared_subscriptionitempricechangedetails


@dataclass_json
@dataclasses.dataclass
class AutoRenewingPlan:
    r"""AutoRenewingPlan
    Information related to an auto renewing plan.
    """
    
    auto_renew_enabled: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRenewEnabled') }})
    price_change_details: Optional[shared_subscriptionitempricechangedetails.SubscriptionItemPriceChangeDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priceChangeDetails') }})
    
