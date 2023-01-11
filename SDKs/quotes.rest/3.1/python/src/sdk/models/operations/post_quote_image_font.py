import dataclasses
from typing import Optional
from ..shared import security as shared_security


@dataclasses.dataclass
class PostQuoteImageFontRequestBodyFont:
    content: bytes = dataclasses.field(metadata={'multipart_form': { 'content': True }})
    font: str = dataclasses.field(metadata={'multipart_form': { 'field_name': 'font' }})
    

@dataclasses.dataclass
class PostQuoteImageFontRequestBody:
    font: PostQuoteImageFontRequestBodyFont = dataclasses.field(metadata={'multipart_form': { 'file': True }})
    tags: Optional[str] = dataclasses.field(default=None, metadata={'multipart_form': { 'field_name': 'tags' }})
    

@dataclasses.dataclass
class PostQuoteImageFontSecurity:
    x_they_said_so_api_secret: shared_security.SchemeXTheySaidSoAPISecret = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclasses.dataclass
class PostQuoteImageFontRequest:
    security: PostQuoteImageFontSecurity = dataclasses.field()
    request: Optional[PostQuoteImageFontRequestBody] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclasses.dataclass
class PostQuoteImageFontResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
