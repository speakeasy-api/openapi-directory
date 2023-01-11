import dataclasses
from typing import Any,Optional


@dataclasses.dataclass
class PostReportsStatusQueryParams:
    report_hash: str = dataclasses.field(metadata={'query_param': { 'field_name': 'report_hash', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostReportsStatusRequest:
    query_params: PostReportsStatusQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostReportsStatusResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_one_error: Optional[Any] = dataclasses.field(default=None)
    four_hundred_and_three_error: Optional[Any] = dataclasses.field(default=None)
    five_hundred_error: Optional[Any] = dataclasses.field(default=None)
    report_status: Optional[Any] = dataclasses.field(default=None)
    
