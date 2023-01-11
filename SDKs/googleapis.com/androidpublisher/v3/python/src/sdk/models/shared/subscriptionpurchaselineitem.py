import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import autorenewingplan as shared_autorenewingplan
from ..shared import offerdetails as shared_offerdetails
from ..shared import prepaidplan as shared_prepaidplan


@dataclass_json
@dataclasses.dataclass
class SubscriptionPurchaseLineItem:
    r"""SubscriptionPurchaseLineItem
    Item-level info for a subscription purchase.
    """
    
    auto_renewing_plan: Optional[shared_autorenewingplan.AutoRenewingPlan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoRenewingPlan') }})
    expiry_time: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryTime') }})
    offer_details: Optional[shared_offerdetails.OfferDetails] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offerDetails') }})
    prepaid_plan: Optional[shared_prepaidplan.PrepaidPlan] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prepaidPlan') }})
    product_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productId') }})
    
