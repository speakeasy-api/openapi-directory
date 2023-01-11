import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import paymentdeltaresponse as shared_paymentdeltaresponse


@dataclasses.dataclass
class ListPaymentChangesV4QueryParams:
    payor_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    updated_since: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'updatedSince', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListPaymentChangesV4Request:
    query_params: ListPaymentChangesV4QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListPaymentChangesV4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_delta_response: Optional[shared_paymentdeltaresponse.PaymentDeltaResponse] = dataclasses.field(default=None)
    
