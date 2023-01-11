import dataclasses
from typing import Any,Optional
from ..shared import paymentresponsev4 as shared_paymentresponsev4


@dataclasses.dataclass
class GetPaymentDetailsV4PathParams:
    payment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentDetailsV4QueryParams:
    sensitive: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPaymentDetailsV4Request:
    path_params: GetPaymentDetailsV4PathParams = dataclasses.field()
    query_params: GetPaymentDetailsV4QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentDetailsV4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_response_v4: Optional[shared_paymentresponsev4.PaymentResponseV4] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
