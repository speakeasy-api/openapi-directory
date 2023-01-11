import dataclasses
from typing import Optional
from ..shared import create_shipments_request_body as shared_create_shipments_request_body
from ..shared import create_shipments_response_body as shared_create_shipments_response_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class CreateShipmentsRequest:
    request: shared_create_shipments_request_body.CreateShipmentsRequestBodyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateShipmentsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_shipments_response_body: Optional[shared_create_shipments_response_body.CreateShipmentsResponseBody] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
