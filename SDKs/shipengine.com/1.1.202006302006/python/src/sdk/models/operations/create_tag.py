import dataclasses
from typing import Optional
from ..shared import create_tag_response_body as shared_create_tag_response_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class CreateTagPathParams:
    tag_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tag_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateTagRequest:
    path_params: CreateTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class CreateTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_tag_response_body: Optional[shared_create_tag_response_body.CreateTagResponseBody] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
