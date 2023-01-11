import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetTagsTagsFaqPathParams:
    tags: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tags', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetTagsTagsFaqQueryParams:
    site: str = dataclasses.field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTagsTagsFaqRequest:
    path_params: GetTagsTagsFaqPathParams = dataclasses.field()
    query_params: GetTagsTagsFaqQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTagsTagsFaqResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
