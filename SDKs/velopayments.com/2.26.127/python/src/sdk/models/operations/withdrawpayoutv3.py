import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class WithdrawPayoutV3PathParams:
    payout_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payoutId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class WithdrawPayoutV3Request:
    path_params: WithdrawPayoutV3PathParams = dataclasses.field()
    

@dataclasses.dataclass
class WithdrawPayoutV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    inline_response_400: Optional[Any] = dataclasses.field(default=None)
    inline_response_401: Optional[Any] = dataclasses.field(default=None)
    inline_response_403: Optional[Any] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    
