import dataclasses
from typing import Any


@dataclasses.dataclass
class HashtagStatsQueryParams:
    tags: list[Any] = dataclasses.field(metadata={'query_param': { 'field_name': 'tags', 'style': 'form', 'explode': False }})
    

@dataclasses.dataclass
class HashtagStatsRequest:
    query_params: HashtagStatsQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class HashtagStatsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
