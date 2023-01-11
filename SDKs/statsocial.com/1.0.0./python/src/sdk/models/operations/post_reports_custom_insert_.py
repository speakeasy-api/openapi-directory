import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostReportsCustomInsertQueryParams:
    ids: list[Any] = dataclasses.field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    upload_hash: str = dataclasses.field(metadata={'query_param': { 'field_name': 'upload_hash', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostReportsCustomInsertRequest:
    query_params: PostReportsCustomInsertQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostReportsCustomInsertResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_one_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_three_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_four_error: Optional[Any] = dataclasses.field(default=None)
    five_hundred_error: Optional[Any] = dataclasses.field(default=None)
    custom_insert: Optional[Any] = dataclasses.field(default=None)
    
