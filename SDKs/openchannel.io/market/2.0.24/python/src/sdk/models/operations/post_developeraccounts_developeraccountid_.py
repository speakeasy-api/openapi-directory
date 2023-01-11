import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostDeveloperAccountsDeveloperAccountIDPathParams:
    developer_account_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'developerAccountId', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostDeveloperAccountsDeveloperAccountIDQueryParams:
    developer_id: str = dataclasses.field(metadata={'query_param': { 'field_name': 'developerId', 'style': 'form', 'explode': True }})
    custom_data: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'customData', 'style': 'form', 'explode': True }})
    email: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    name: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostDeveloperAccountsDeveloperAccountIDRequest:
    path_params: PostDeveloperAccountsDeveloperAccountIDPathParams = dataclasses.field()
    query_params: PostDeveloperAccountsDeveloperAccountIDQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostDeveloperAccountsDeveloperAccountIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
