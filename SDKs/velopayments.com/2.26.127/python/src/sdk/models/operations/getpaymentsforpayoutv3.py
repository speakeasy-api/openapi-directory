import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import pagedpaymentsresponsev3 as shared_pagedpaymentsresponsev3


@dataclasses.dataclass
class GetPaymentsForPayoutV3PathParams:
    payout_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payoutId', 'style': 'simple', 'explode': False }})
    
class GetPaymentsForPayoutV3StatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    WITHDRAWN = "WITHDRAWN"
    WITHDRAWABLE = "WITHDRAWABLE"

class GetPaymentsForPayoutV3TransmissionTypeEnum(str, Enum):
    ACH = "ACH"
    SAME_DAY_ACH = "SAME_DAY_ACH"
    WIRE = "WIRE"


@dataclasses.dataclass
class GetPaymentsForPayoutV3QueryParams:
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    payment_memo: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'paymentMemo', 'style': 'form', 'explode': True }})
    payor_payment_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payorPaymentId', 'style': 'form', 'explode': True }})
    remote_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'remoteId', 'style': 'form', 'explode': True }})
    source_account_name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sourceAccountName', 'style': 'form', 'explode': True }})
    status: Optional[GetPaymentsForPayoutV3StatusEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    transmission_type: Optional[GetPaymentsForPayoutV3TransmissionTypeEnum] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'transmissionType', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPaymentsForPayoutV3Request:
    path_params: GetPaymentsForPayoutV3PathParams = dataclasses.field()
    query_params: GetPaymentsForPayoutV3QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPaymentsForPayoutV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    paged_payments_response_v3: Optional[shared_pagedpaymentsresponsev3.PagedPaymentsResponseV3] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
