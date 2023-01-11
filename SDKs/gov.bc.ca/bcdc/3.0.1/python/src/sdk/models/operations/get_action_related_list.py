import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetActionRelatedListQueryParams:
    dataset: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'dataset', 'style': 'form', 'explode': True }})
    featured: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'featured', 'style': 'form', 'explode': True }})
    id: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    sort: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    type_filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'type_filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetActionRelatedListRequest:
    query_params: GetActionRelatedListQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetActionRelatedListResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
