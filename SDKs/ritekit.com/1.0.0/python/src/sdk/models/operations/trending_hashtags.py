import dataclasses
from typing import Optional


@dataclasses.dataclass
class TrendingHashtagsQueryParams:
    green: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'green', 'style': 'form', 'explode': True }})
    latin: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'latin', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class TrendingHashtagsRequest:
    query_params: TrendingHashtagsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class TrendingHashtagsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
