import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import getpayoutsresponsev3 as shared_getpayoutsresponsev3

class GetPayoutsForPayorV3StatusEnum(str, Enum):
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
class GetPayoutsForPayorV3QueryParams:
    payor_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payout_memo: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payoutMemo', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[GetPayoutsForPayorV3StatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    submitted_date_from: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'submittedDateFrom', 'style': 'form', 'explode': True }})
    submitted_date_to: Optional[date] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'submittedDateTo', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPayoutsForPayorV3Request:
    query_params: GetPayoutsForPayorV3QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayoutsForPayorV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_payouts_response_v3: Optional[shared_getpayoutsresponsev3.GetPayoutsResponseV3] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
