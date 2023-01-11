import dataclasses
from typing import Optional
from ..shared import remove_from_batch_request_body as shared_remove_from_batch_request_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class RemoveFromBatchPathParams:
    batch_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'batch_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class RemoveFromBatchRequest:
    path_params: RemoveFromBatchPathParams = dataclasses.field()
    request: shared_remove_from_batch_request_body.RemoveFromBatchRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class RemoveFromBatchResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty_response_body: Optional[str] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
