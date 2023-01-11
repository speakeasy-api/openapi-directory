import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import paymentdeltaresponsev1 as shared_paymentdeltaresponsev1


@dataclasses.dataclass
class ListPaymentChangesQueryParams:
    payor_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    updated_since: datetime = dataclasses.field(metadata={'query_param': { 'field_name': 'updatedSince', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListPaymentChangesRequest:
    query_params: ListPaymentChangesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListPaymentChangesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payment_delta_response_v1: Optional[shared_paymentdeltaresponsev1.PaymentDeltaResponseV1] = dataclasses.field(default=None)
    
