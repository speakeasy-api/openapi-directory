import dataclasses
from typing import Any,Optional
from ..shared import payoutsummaryresponsev3 as shared_payoutsummaryresponsev3


@dataclasses.dataclass
class GetPayoutSummaryV3PathParams:
    payout_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payoutId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetPayoutSummaryV3Request:
    path_params: GetPayoutSummaryV3PathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayoutSummaryV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    payout_summary_response_v3: Optional[shared_payoutsummaryresponsev3.PayoutSummaryResponseV3] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
