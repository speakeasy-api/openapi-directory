import dataclasses
from typing import Optional
from ..shared import parse_shipment_request_body as shared_parse_shipment_request_body
from ..shared import error_response_body as shared_error_response_body
from ..shared import parse_shipment_response_body as shared_parse_shipment_response_body


@dataclasses.dataclass
class ParseShipmentRequest:
    request: shared_parse_shipment_request_body.ParseShipmentRequestBodyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ParseShipmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    parse_shipment_response_body: Optional[shared_parse_shipment_response_body.ParseShipmentResponseBody] = dataclasses.field(default=None)
    
