import dataclasses
from typing import Optional
from ..shared import billing as shared_billing


@dataclasses.dataclass
class GetBillingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    billing: Optional[shared_billing.Billing] = dataclasses.field(default=None)
    
