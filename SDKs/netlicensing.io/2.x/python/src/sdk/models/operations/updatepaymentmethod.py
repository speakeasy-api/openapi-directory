import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class UpdatePaymentMethodPathParams:
    payment_method_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'paymentMethodNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdatePaymentMethodRequestBody:
    active: Optional[bool] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'active' }})
    paypal_subject: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'paypal.subject' }})
    

@dataclasses.dataclass
class UpdatePaymentMethodSecurity:
    basic_auth: shared_security.SchemeBasicAuth = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdatePaymentMethodRequest:
    path_params: UpdatePaymentMethodPathParams = dataclasses.field()
    security: UpdatePaymentMethodSecurity = dataclasses.field()
    request: Optional[UpdatePaymentMethodRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    

@dataclasses.dataclass
class UpdatePaymentMethodResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    netlicensing: Optional[Any] = dataclasses.field(default=None)
    
