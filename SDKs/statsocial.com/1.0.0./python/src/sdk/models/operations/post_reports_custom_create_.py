import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostReportsCustomCreateQueryParams:
    upload_hash: str = dataclasses.field(metadata={'query_param': { 'field_name': 'upload_hash', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostReportsCustomCreateRequest:
    query_params: PostReportsCustomCreateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostReportsCustomCreateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_one_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_three_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_four_error: Optional[Any] = dataclasses.field(default=None)
    five_hundred_error: Optional[Any] = dataclasses.field(default=None)
    custom_create: Optional[Any] = dataclasses.field(default=None)
    
