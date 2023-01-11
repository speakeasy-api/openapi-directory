import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostReportsTwitterCreateQueryParams:
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    twitter_handle: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'twitter_handle', 'style': 'form', 'explode': True }})
    twitter_id: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'twitter_id', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostReportsTwitterCreateRequest:
    query_params: PostReportsTwitterCreateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostReportsTwitterCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_one_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_three_error: Optional[Any] = dataclasses.field(default=None)
    five_hundred_error: Optional[Any] = dataclasses.field(default=None)
    create_twitter: Optional[Any] = dataclasses.field(default=None)
    
