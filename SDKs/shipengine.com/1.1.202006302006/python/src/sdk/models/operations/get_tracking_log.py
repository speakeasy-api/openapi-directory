import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import get_tracking_log_response_body as shared_get_tracking_log_response_body


@dataclasses.dataclass
class GetTrackingLogQueryParams:
    carrier_code: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'carrier_code', 'style': 'form', 'explode': True }})
    tracking_number: Optional[str] = dataclasses.field(default=None, metadata={'query_param': { 'field_name': 'tracking_number', 'style': 'form', 'explode': True }})
    

@dataclasses.dataclass
class GetTrackingLogRequest:
    query_params: GetTrackingLogQueryParams = dataclasses.field()
    

@dataclasses.dataclass
class GetTrackingLogResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    get_tracking_log_response_body: Optional[shared_get_tracking_log_response_body.GetTrackingLogResponseBody] = dataclasses.field(default=None)
    
