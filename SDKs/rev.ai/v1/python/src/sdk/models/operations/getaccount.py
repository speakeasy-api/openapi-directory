import dataclasses
from typing import Any,Optional
from ..shared import account as shared_account


@dataclasses.dataclass
class GetAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    account: Optional[shared_account.Account] = dataclasses.field(default=None)
    get_account_401_application_problem_plus_json_any: Optional[Any] = dataclasses.field(default=None)
    
