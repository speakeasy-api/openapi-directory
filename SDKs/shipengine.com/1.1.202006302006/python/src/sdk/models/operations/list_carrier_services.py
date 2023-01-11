import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import list_carrier_services_response_body as shared_list_carrier_services_response_body


@dataclasses.dataclass
class ListCarrierServicesPathParams:
    carrier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'carrier_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ListCarrierServicesRequest:
    path_params: ListCarrierServicesPathParams = dataclasses.field()
    

@dataclasses.dataclass
class ListCarrierServicesResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    list_carrier_services_response_body: Optional[shared_list_carrier_services_response_body.ListCarrierServicesResponseBody] = dataclasses.field(default=None)
    
