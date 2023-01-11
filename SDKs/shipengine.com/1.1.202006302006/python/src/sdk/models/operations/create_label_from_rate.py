import dataclasses
from typing import Optional
from ..shared import create_label_from_rate_request_body as shared_create_label_from_rate_request_body
from ..shared import create_label_from_rate_response_body as shared_create_label_from_rate_response_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class CreateLabelFromRatePathParams:
    rate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rate_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateLabelFromRateRequest:
    path_params: CreateLabelFromRatePathParams = dataclasses.field()
    request: shared_create_label_from_rate_request_body.CreateLabelFromRateRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateLabelFromRateResponseOutput:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_label_from_rate_response_body: Optional[shared_create_label_from_rate_response_body.CreateLabelFromRateResponseBodyOutput] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
