import dataclasses
from typing import Optional
from ..shared import textdto as shared_textdto


@dataclasses.dataclass
class PostAPITextHumanizeHeaders:
    x_api_key: Optional[str] = dataclasses.field(default=None, metadata={'header': { 'field_name': 'X-Api-Key', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class PostAPITextHumanizeRequests:
    text_dto: Optional[shared_textdto.TextDto] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    text_dto1: Optional[shared_textdto.TextDto] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    text_dto2: Optional[shared_textdto.TextDto] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    text_dto3: Optional[shared_textdto.TextDto] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclasses.dataclass
class PostAPITextHumanizeRequest:
    headers: PostAPITextHumanizeHeaders = dataclasses.field()
    request: PostAPITextHumanizeRequests = dataclasses.field()
    

@dataclasses.dataclass
class PostAPITextHumanizeResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
