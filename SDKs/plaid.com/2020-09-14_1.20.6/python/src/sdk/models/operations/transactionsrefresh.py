import dataclasses
from typing import Any,Optional
from ..shared import transactionsrefreshrequest as shared_transactionsrefreshrequest
from ..shared import transactionsrefreshresponse as shared_transactionsrefreshresponse


@dataclasses.dataclass
class TransactionsRefreshRequest:
    request: shared_transactionsrefreshrequest.TransactionsRefreshRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TransactionsRefreshResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transactions_refresh_response: Optional[shared_transactionsrefreshresponse.TransactionsRefreshResponse] = dataclasses.field(default=None)
    
