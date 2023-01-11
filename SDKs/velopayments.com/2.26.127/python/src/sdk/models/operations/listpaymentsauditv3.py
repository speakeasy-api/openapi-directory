import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import listpaymentsresponsev3 as shared_listpaymentsresponsev3

class ListPaymentsAuditV3StatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    AWAITING_FUNDS = "AWAITING_FUNDS"
    FUNDED = "FUNDED"
    UNFUNDED = "UNFUNDED"
    BANK_PAYMENT_REQUESTED = "BANK_PAYMENT_REQUESTED"
    REJECTED = "REJECTED"
    ACCEPTED_BY_RAILS = "ACCEPTED_BY_RAILS"
    CONFIRMED = "CONFIRMED"
    FAILED = "FAILED"
    RETURNED = "RETURNED"
    WITHDRAWN = "WITHDRAWN"


@dataclasses.dataclass
class ListPaymentsAuditV3QueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payee_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payeeId', 'style': 'form', 'explode': True }})
    payment_amount_from: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'paymentAmountFrom', 'style': 'form', 'explode': True }})
    payment_amount_to: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'paymentAmountTo', 'style': 'form', 'explode': True }})
    payment_currency: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'paymentCurrency', 'style': 'form', 'explode': True }})
    payment_memo: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'paymentMemo', 'style': 'form', 'explode': True }})
    payor_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    payor_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payorName', 'style': 'form', 'explode': True }})
    remote_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'remoteId', 'style': 'form', 'explode': True }})
    sensitive: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sensitive', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    source_account_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceAccountName', 'style': 'form', 'explode': True }})
    source_amount_from: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceAmountFrom', 'style': 'form', 'explode': True }})
    source_amount_to: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceAmountTo', 'style': 'form', 'explode': True }})
    source_currency: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceCurrency', 'style': 'form', 'explode': True }})
    status: Optional[ListPaymentsAuditV3StatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    submitted_date_from: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'submittedDateFrom', 'style': 'form', 'explode': True }})
    submitted_date_to: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'submittedDateTo', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class ListPaymentsAuditV3Request:
    query_params: ListPaymentsAuditV3QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class ListPaymentsAuditV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    list_payments_response_v3: Optional[shared_listpaymentsresponsev3.ListPaymentsResponseV3] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    
