import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostPostsIDCommentsAddPathParams:
    id: int = dataclasses.field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostPostsIDCommentsAddQueryParams:
    site: str = dataclasses.field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    body: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'body', 'style': 'form', 'explode': True }})
    callback: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    preview: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'preview', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostPostsIDCommentsAddRequest:
    path_params: PostPostsIDCommentsAddPathParams = dataclasses.field()
    query_params: PostPostsIDCommentsAddQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class PostPostsIDCommentsAddResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
