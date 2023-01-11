import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import get_batch_by_id_response_body as shared_get_batch_by_id_response_body


@dataclasses.dataclass
class GetBatchByIDPathParams:
    batch_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'batch_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBatchByIDRequest:
    path_params: GetBatchByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBatchByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    get_batch_by_id_response_body: Optional[shared_get_batch_by_id_response_body.GetBatchByIDResponseBody] = dataclasses.field(default=None)
    
