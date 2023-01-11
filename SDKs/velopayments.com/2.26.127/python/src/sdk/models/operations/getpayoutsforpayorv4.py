import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getpayoutsresponse as shared_getpayoutsresponse

class GetPayoutsForPayorV4StatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    SUBMITTED = "SUBMITTED"
    QUOTED = "QUOTED"
    INSTRUCTED = "INSTRUCTED"
    COMPLETED = "COMPLETED"
    INCOMPLETE = "INCOMPLETE"
    CONFIRMED = "CONFIRMED"
    WITHDRAWN = "WITHDRAWN"


@dataclasses.dataclass
class GetPayoutsForPayorV4QueryParams:
    from_payor_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'fromPayorName', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payor_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    payout_memo: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payoutMemo', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[GetPayoutsForPayorV4StatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    submitted_date_from: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'submittedDateFrom', 'style': 'form', 'explode': True }})
    submitted_date_to: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'submittedDateTo', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPayoutsForPayorV4Request:
    query_params: GetPayoutsForPayorV4QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayoutsForPayorV4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_payouts_response: Optional[shared_getpayoutsresponse.GetPayoutsResponse] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
