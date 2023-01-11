import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostFilesURLQueryParams:
    url: str = dataclasses.field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    is_private: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isPrivate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostFilesURLRequest:
    query_params: PostFilesURLQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostFilesURLResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
