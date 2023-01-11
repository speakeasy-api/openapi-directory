import dataclasses
from typing import Optional


@dataclasses.dataclass
class UsersAddonAccountsReadPathParams:
    account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'account_id', 'style': 'simple', 'explode': False }})
    provider: str = dataclasses.field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersAddonAccountsReadRequest:
    path_params: UsersAddonAccountsReadPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersAddonAccountsReadResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
