import dataclasses
from typing import Any,Optional
from ..shared import cache_post_request as shared_cache_post_request


@dataclasses.dataclass
class CachePostRequest:
    request: shared_cache_post_request.CachePostRequest = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CachePostResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    problem_detail: Optional[Any] = dataclasses.field(default=None)
    
