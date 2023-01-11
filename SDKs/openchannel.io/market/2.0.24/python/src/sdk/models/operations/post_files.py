import dataclasses
from typing import Optional


@dataclasses.dataclass
class PostFilesQueryParams:
    hash: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'hash', 'style': 'form', 'explode': True }})
    is_private: Optional[bool] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'isPrivate', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class PostFilesRequestBodyFile:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    file: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'file' }})
    

@dataclasses.dataclass
class PostFilesRequestBody:
    file: PostFilesRequestBodyFile = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    

@dataclasses.dataclass
class PostFilesRequest:
    query_params: PostFilesQueryParams = dataclasses.field()
    request: PostFilesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostFilesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    body: Optional[bytes] = dataclasses.field(default=None)
    
