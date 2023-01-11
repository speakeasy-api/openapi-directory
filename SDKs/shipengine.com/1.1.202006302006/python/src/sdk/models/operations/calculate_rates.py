import dataclasses
from typing import Optional
from ..shared import calculate_rates_request_body as shared_calculate_rates_request_body
from ..shared import calculate_rates_response_body as shared_calculate_rates_response_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class CalculateRatesRequest:
    request: shared_calculate_rates_request_body.CalculateRatesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CalculateRatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    calculate_rates_response_body: Optional[shared_calculate_rates_response_body.CalculateRatesResponseBody] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
