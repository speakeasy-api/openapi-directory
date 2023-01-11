import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import get_carrier_by_id_response_body as shared_get_carrier_by_id_response_body


@dataclasses.dataclass
class GetCarrierByIDPathParams:
    carrier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'carrier_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCarrierByIDRequest:
    path_params: GetCarrierByIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCarrierByIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    get_carrier_by_id_response_body: Optional[shared_get_carrier_by_id_response_body.GetCarrierByIDResponseBody] = dataclasses.field(default=None)
    
