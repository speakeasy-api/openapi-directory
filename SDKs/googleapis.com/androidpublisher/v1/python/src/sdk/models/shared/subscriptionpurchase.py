import dataclasses
from typing import Optional


@dataclasses.dataclass
class SubscriptionPurchase:
    r"""SubscriptionPurchase
    A SubscriptionPurchase resource indicates the status of a user's subscription purchase.
    """
    
    auto_renewing: Optional[bool] = dataclasses.field(default=None)
    initiation_timestamp_msec: Optional[str] = dataclasses.field(default=None)
    kind: Optional[str] = dataclasses.field(default=None)
    valid_until_timestamp_msec: Optional[str] = dataclasses.field(default=None)
    
