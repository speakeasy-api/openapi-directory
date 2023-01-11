import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetUserAccountsUserAccountIDPathParams:
    user_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUserAccountsUserAccountIDRequest:
    path_params: GetUserAccountsUserAccountIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUserAccountsUserAccountIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
