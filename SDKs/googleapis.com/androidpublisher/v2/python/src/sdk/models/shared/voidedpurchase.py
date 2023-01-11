import dataclasses
from typing import Optional


@dataclasses.dataclass
class VoidedPurchase:
    r"""VoidedPurchase
    A VoidedPurchase resource indicates a purchase that was either canceled/refunded/charged-back.
    """
    
    kind: Optional[str] = dataclasses.field(default=None)
    purchase_time_millis: Optional[str] = dataclasses.field(default=None)
    purchase_token: Optional[str] = dataclasses.field(default=None)
    voided_time_millis: Optional[str] = dataclasses.field(default=None)
    
