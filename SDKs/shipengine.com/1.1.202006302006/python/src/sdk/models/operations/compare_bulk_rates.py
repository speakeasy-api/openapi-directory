import dataclasses
from typing import Optional
from ..shared import compare_bulk_rates_request_body as shared_compare_bulk_rates_request_body
from ..shared import bulk_rate as shared_bulk_rate
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class CompareBulkRatesRequest:
    request: shared_compare_bulk_rates_request_body.CompareBulkRatesRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CompareBulkRatesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    compare_bulk_rates_response_body: Optional[list[shared_bulk_rate.BulkRate]] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
