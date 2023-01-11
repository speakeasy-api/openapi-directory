import dataclasses
from typing import Any,Optional
from ..shared import accountsgetrequest as shared_accountsgetrequest


@dataclasses.dataclass
class AccountsGetRequest:
    request: shared_accountsgetrequest.AccountsGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AccountsGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accounts_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    error: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
