import dataclasses
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclasses.dataclass
class SubscriptionPurchasesDeferResponse:
    r"""SubscriptionPurchasesDeferResponse
    Response for the purchases.subscriptions.defer API.
    """
    
    new_expiry_time_millis: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newExpiryTimeMillis') }})
    
