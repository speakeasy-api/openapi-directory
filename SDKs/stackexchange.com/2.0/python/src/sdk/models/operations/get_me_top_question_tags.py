import dataclasses
from typing import Optional


@dataclasses.dataclass
class GetMeTopQuestionTagsQueryParams:
    site: str = dataclasses.field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetMeTopQuestionTagsRequest:
    query_params: GetMeTopQuestionTagsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetMeTopQuestionTagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
