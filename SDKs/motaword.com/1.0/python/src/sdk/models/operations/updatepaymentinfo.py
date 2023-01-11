import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import updatepaymentinfo as shared_updatepaymentinfo
from ..shared import error as shared_error
from ..shared import paymentinfo as shared_paymentinfo


@dataclasses.dataclass
class UpdatePaymentInfoRequest:
    request: Optional[shared_updatepaymentinfo.UpdatePaymentInfo] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdatePaymentInfoResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[shared_error.Error] = dataclasses.field(default=None)
    payment_info: Optional[shared_paymentinfo.PaymentInfo] = dataclasses.field(default=None)
    
