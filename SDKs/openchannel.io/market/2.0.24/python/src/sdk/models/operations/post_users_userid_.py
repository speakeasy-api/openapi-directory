import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostUsersUserIDPathParams:
    user_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostUsersUserIDQueryParams:
    custom_data: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    type: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    username: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostUsersUserIDRequest:
    path_params: PostUsersUserIDPathParams = dataclasses.field()
    query_params: PostUsersUserIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostUsersUserIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
