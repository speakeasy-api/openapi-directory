import dataclasses
from typing import Optional
from ..shared import parse_address_request_body as shared_parse_address_request_body
from ..shared import error_response_body as shared_error_response_body
from ..shared import parse_address_response_body as shared_parse_address_response_body


@dataclasses.dataclass
class ParseAddressRequest:
    request: shared_parse_address_request_body.ParseAddressRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ParseAddressResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    parse_address_response_body: Optional[shared_parse_address_response_body.ParseAddressResponseBody] = dataclasses.field(default=None)
    
