import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import get_rate_by_id_response_body as shared_get_rate_by_id_response_body


@dataclasses.dataclass
class GetRateByIDPathParams:
    rate_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'rate_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetRateByIDRequest:
    path_params: GetRateByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetRateByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    get_rate_by_id_response_body: Optional[shared_get_rate_by_id_response_body.GetRateByIDResponseBody] = dataclasses.field(default=None)
    
