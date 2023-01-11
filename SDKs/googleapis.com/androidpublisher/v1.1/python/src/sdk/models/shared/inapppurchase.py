import dataclasses
from typing import Optional


@dataclasses.dataclass
class InappPurchase:
    r"""InappPurchase
    An InappPurchase resource indicates the status of a user's inapp product purchase.
    """
    
    consumption_state: Optional[int] = dataclasses.field(default=None)
    developer_payload: Optional[str] = dataclasses.field(default=None)
    kind: Optional[str] = dataclasses.field(default=None)
    order_id: Optional[str] = dataclasses.field(default=None)
    purchase_state: Optional[int] = dataclasses.field(default=None)
    purchase_time: Optional[str] = dataclasses.field(default=None)
    purchase_type: Optional[int] = dataclasses.field(default=None)
    
