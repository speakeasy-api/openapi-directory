import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import void_label_response_body as shared_void_label_response_body


@dataclasses.dataclass
class VoidLabelPathParams:
    label_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'label_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class VoidLabelRequest:
    path_params: VoidLabelPathParams = dataclasses.field()
    

@dataclasses.dataclass
class VoidLabelResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    void_label_response_body: Optional[shared_void_label_response_body.VoidLabelResponseBody] = dataclasses.field(default=None)
    
