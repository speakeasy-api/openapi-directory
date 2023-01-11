import dataclasses
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class GetPaymentMethodPathParams:
    payment_method_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentMethodNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPaymentMethodSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class GetPaymentMethodRequest:
    path_params: GetPaymentMethodPathParams = dataclasses.field()
    security: GetPaymentMethodSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentMethodResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
