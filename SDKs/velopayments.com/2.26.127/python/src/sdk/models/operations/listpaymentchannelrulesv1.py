import dataclasses
from typing import Any,Optional
from ..shared import paymentchannelrulesresponse as shared_paymentchannelrulesresponse


@dataclasses.dataclass
class ListPaymentChannelRulesV1Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_channel_rules_response: Optional[shared_paymentchannelrulesresponse.PaymentChannelRulesResponse] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    
