import dataclasses
from typing import Any,Optional
from ..shared import paymentresponsev3 as shared_paymentresponsev3


@dataclasses.dataclass
class GetPaymentDetailsV3PathParams:
    payment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentDetailsV3QueryParams:
    sensitive: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPaymentDetailsV3Request:
    path_params: GetPaymentDetailsV3PathParams = dataclasses.field()
    query_params: GetPaymentDetailsV3QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentDetailsV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_response_v3: Optional[shared_paymentresponsev3.PaymentResponseV3] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
