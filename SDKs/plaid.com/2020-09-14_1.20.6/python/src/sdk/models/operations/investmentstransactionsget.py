import dataclasses
from typing import Any,Optional
from ..shared import investmentstransactionsgetrequest as shared_investmentstransactionsgetrequest


@dataclasses.dataclass
class InvestmentsTransactionsGetRequest:
    request: shared_investmentstransactionsgetrequest.InvestmentsTransactionsGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class InvestmentsTransactionsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    investments_transactions_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
