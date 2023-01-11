import dataclasses
from typing import Optional


@dataclasses.dataclass
class SubscriptionPurchasesDeferResponse:
    new_expiry_time_millis: Optional[str] = dataclasses.field(default=None)
    
