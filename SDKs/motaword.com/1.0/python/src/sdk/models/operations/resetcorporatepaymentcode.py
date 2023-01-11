import dataclasses
from typing import Optional
from ..shared import creditcard as shared_creditcard
from ..shared import error as shared_error


@dataclasses.dataclass
class ResetCorporatePaymentCodeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    credit_card: Optional[shared_creditcard.CreditCard] = dataclasses.field(default=None)
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    
