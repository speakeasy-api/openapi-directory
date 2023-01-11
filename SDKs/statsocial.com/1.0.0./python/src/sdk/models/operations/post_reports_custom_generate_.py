import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostReportsCustomGenerateQueryParams:
    report_name: str = dataclasses.field(metadata={'query_param': { 'field_name': 'report_name', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostReportsCustomGenerateRequest:
    query_params: PostReportsCustomGenerateQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostReportsCustomGenerateResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_one_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_three_error: Optional[Any] = dataclasses.field(default=None)
    five_hundred_error: Optional[Any] = dataclasses.field(default=None)
    custom_generate: Optional[Any] = dataclasses.field(default=None)
    
