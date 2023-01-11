import dataclasses
from typing import Optional


@dataclasses.dataclass
class AutoHashtagQueryParams:
    post: str = dataclasses.field(metadata={'query_param': { 'field_name': 'post', 'style': 'form', 'explode': True }})
    hashtag_position: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'hashtagPosition', 'style': 'form', 'explode': True }})
    max_hashtags: Optional[int] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'maxHashtags', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class AutoHashtagRequest:
    query_params: AutoHashtagQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class AutoHashtagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
