import dataclasses
from typing import Any,Optional
from ..shared import quoteresponsev3 as shared_quoteresponsev3


@dataclasses.dataclass
class CreateQuoteForPayoutV3PathParams:
    payout_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'payoutId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateQuoteForPayoutV3Request:
    path_params: CreateQuoteForPayoutV3PathParams = dataclasses.field()
    

@dataclasses.dataclass
class CreateQuoteForPayoutV3Response:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    quote_response_v3: Optional[shared_quoteresponsev3.QuoteResponseV3] = dataclasses.field(default=None)
    inline_response_404: Optional[Any] = dataclasses.field(default=None)
    inline_response_409: Optional[Any] = dataclasses.field(default=None)
    
