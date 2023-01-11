import dataclasses
from typing import Optional
from ..shared import add_funds_to_carrier_request_body as shared_add_funds_to_carrier_request_body
from ..shared import add_funds_to_carrier_response_body as shared_add_funds_to_carrier_response_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class AddFundsToCarrierPathParams:
    carrier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'carrier_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class AddFundsToCarrierRequest:
    path_params: AddFundsToCarrierPathParams = dataclasses.field()
    request: shared_add_funds_to_carrier_request_body.AddFundsToCarrierRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class AddFundsToCarrierResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    add_funds_to_carrier_response_body: Optional[shared_add_funds_to_carrier_response_body.AddFundsToCarrierResponseBody] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
