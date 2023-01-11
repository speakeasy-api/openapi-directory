import dataclasses
from typing import Optional


@dataclasses.dataclass
class PatchUserAccountsUserAccountIDPathParams:
    user_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PatchUserAccountsUserAccountIDQueryParams:
    user_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PatchUserAccountsUserAccountIDRequest:
    path_params: PatchUserAccountsUserAccountIDPathParams = dataclasses.field()
    query_params: PatchUserAccountsUserAccountIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PatchUserAccountsUserAccountIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
