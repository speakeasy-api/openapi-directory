import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class RenameTagPathParams:
    new_tag_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'new_tag_name', 'style': 'simple', 'explode': False }})
    tag_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tag_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RenameTagRequest:
    path_params: RenameTagPathParams = dataclasses.field()
    

@dataclasses.dataclass
class RenameTagResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty_response_body: Optional[str] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
