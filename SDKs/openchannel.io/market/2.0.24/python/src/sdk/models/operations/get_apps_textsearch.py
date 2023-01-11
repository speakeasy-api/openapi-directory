import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetAppsTextSearchQueryParams:
    fields: str = dataclasses.field(metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    text: str = dataclasses.field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    is_owned: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isOwned', 'style': 'form', 'explode': True }})
    limit: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page_number: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pageNumber', 'style': 'form', 'explode': True }})
    query: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    user_id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'userId', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetAppsTextSearchRequest:
    query_params: GetAppsTextSearchQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetAppsTextSearchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
