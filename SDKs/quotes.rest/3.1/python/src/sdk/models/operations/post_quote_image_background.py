import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PostQuoteImageBackgroundRequestBodyImage:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    image: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'image' }})
    

@dataclasses.dataclass
class PostQuoteImageBackgroundRequestBody:
    image: PostQuoteImageBackgroundRequestBodyImage = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    tags: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'tags' }})
    

@dataclasses.dataclass
class PostQuoteImageBackgroundSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostQuoteImageBackgroundRequest:
    security: PostQuoteImageBackgroundSecurity = dataclasses.field()
    request: Optional[PostQuoteImageBackgroundRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostQuoteImageBackgroundResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
