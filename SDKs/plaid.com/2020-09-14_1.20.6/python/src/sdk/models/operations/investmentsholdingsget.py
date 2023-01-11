import dataclasses
from typing import Any,Optional
from ..shared import investmentsholdingsgetrequest as shared_investmentsholdingsgetrequest


@dataclasses.dataclass
class InvestmentsHoldingsGetRequest:
    request: shared_investmentsholdingsgetrequest.InvestmentsHoldingsGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class InvestmentsHoldingsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    investments_holdings_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
