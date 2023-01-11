import dataclasses
from typing import Optional
from ..shared import create_return_label_request_body as shared_create_return_label_request_body
from ..shared import create_return_label_response_body as shared_create_return_label_response_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class CreateReturnLabelPathParams:
    label_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'label_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateReturnLabelRequest:
    path_params: CreateReturnLabelPathParams = dataclasses.field()
    request: shared_create_return_label_request_body.CreateReturnLabelRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateReturnLabelResponseOutput:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_return_label_response_body: Optional[shared_create_return_label_response_body.CreateReturnLabelResponseBodyOutput] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
