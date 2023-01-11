import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import get_batch_by_external_id_response_body as shared_get_batch_by_external_id_response_body


@dataclasses.dataclass
class GetBatchByExternalIDPathParams:
    external_batch_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'external_batch_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetBatchByExternalIDRequest:
    path_params: GetBatchByExternalIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetBatchByExternalIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    get_batch_by_external_id_response_body: Optional[shared_get_batch_by_external_id_response_body.GetBatchByExternalIDResponseBody] = dataclasses.field(default=None)
    
