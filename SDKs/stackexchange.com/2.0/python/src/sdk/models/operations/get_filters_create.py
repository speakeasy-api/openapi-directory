import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetFiltersCreateQueryParams:
    base: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'base', 'style': 'form', 'explode': True }})
    exclude: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'exclude', 'style': 'form', 'explode': True }})
    include: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    unsafe: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'unsafe', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetFiltersCreateRequest:
    query_params: GetFiltersCreateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetFiltersCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
