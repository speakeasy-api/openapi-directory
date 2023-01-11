import dataclasses
from typing import Optional


@dataclasses.dataclass
class UsersAddonAccountsListPathParams:
    provider: str = dataclasses.field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UsersAddonAccountsListRequest:
    path_params: UsersAddonAccountsListPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UsersAddonAccountsListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
