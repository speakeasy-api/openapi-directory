import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAppsQueryParams:
    is_owner: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isOwner', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageNumber', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAppsRequest:
    query_params: GetAppsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAppsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
