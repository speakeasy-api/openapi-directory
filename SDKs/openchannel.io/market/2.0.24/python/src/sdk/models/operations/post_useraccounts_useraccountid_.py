import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostUserAccountsUserAccountIDPathParams:
    user_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostUserAccountsUserAccountIDQueryParams:
    user_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostUserAccountsUserAccountIDRequest:
    path_params: PostUserAccountsUserAccountIDPathParams = dataclasses.field()
    query_params: PostUserAccountsUserAccountIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostUserAccountsUserAccountIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
