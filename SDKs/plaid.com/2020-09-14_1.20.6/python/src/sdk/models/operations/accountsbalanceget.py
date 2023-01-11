import dataclasses
from typing import Any,Optional
from ..shared import accountsbalancegetrequest as shared_accountsbalancegetrequest


@dataclasses.dataclass
class AccountsBalanceGetRequest:
    request: shared_accountsbalancegetrequest.AccountsBalanceGetRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AccountsBalanceGetResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    accounts_get_response: Optional[dict[str, Any]] = dataclasses.field(default=None)
    
