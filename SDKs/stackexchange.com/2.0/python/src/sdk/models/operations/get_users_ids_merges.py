import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetUsersIdsMergesPathParams:
    ids: str = dataclasses.field(metadata={'path_param': { 'field_name': 'ids', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetUsersIdsMergesQueryParams:
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetUsersIdsMergesRequest:
    path_params: GetUsersIdsMergesPathParams = dataclasses.field()
    query_params: GetUsersIdsMergesQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetUsersIdsMergesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
