import dataclasses
from typing import Any,Optional
from ..shared import getpayoutstatistics as shared_getpayoutstatistics


@dataclasses.dataclass
class GetPayoutStatsV4QueryParams:
    payor_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'payorId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetPayoutStatsV4Request:
    query_params: GetPayoutStatsV4QueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetPayoutStatsV4Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    get_payout_statistics: Optional[shared_getpayoutstatistics.GetPayoutStatistics] = dataclasses.field(default=None)
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
