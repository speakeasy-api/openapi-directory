import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class StopTrackingQueryParams:
    carrier_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'carrier_code', 'style': 'form', 'explode': True }})
    tracking_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tracking_number', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class StopTrackingRequest:
    query_params: StopTrackingQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class StopTrackingResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty_response_body: Optional[str] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
