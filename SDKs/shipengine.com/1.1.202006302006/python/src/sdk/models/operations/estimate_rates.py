import dataclasses
from typing import Optional
from ..shared import estimate_rates_request_body as shared_estimate_rates_request_body
from ..shared import error_response_body as shared_error_response_body
from ..shared import rate as shared_rate


@dataclasses.dataclass
class EstimateRatesRequest:
    request: shared_estimate_rates_request_body.EstimateRatesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class EstimateRatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    estimate_rates_response_body: Optional[list[shared_rate.Rate]] = dataclasses.field(default=None)
    
