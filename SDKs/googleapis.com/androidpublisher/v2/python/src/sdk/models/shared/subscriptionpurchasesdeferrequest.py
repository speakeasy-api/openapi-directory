import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import subscriptiondeferralinfo as shared_subscriptiondeferralinfo


@dataclass_json
@dataclasses.dataclass
class SubscriptionPurchasesDeferRequest:
    deferral_info: Optional[shared_subscriptiondeferralinfo.SubscriptionDeferralInfo] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deferralInfo') }})
    
