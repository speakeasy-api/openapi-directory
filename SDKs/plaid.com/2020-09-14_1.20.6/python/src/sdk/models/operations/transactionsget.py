import dataclasses
from typing import Any,Optional
from ..shared import transactionsgetrequest as shared_transactionsgetrequest


@dataclasses.dataclass
class TransactionsGetRequest:
    request: shared_transactionsgetrequest.TransactionsGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class TransactionsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    transactions_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
