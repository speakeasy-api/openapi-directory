import dataclasses
from typing import Optional
from ..shared import add_to_batch_request_body as shared_add_to_batch_request_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class AddToBatchPathParams:
    batch_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'batch_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddToBatchRequest:
    path_params: AddToBatchPathParams = dataclasses.field()
    request: shared_add_to_batch_request_body.AddToBatchRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddToBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty_response_body: Optional[str] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
