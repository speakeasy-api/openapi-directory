import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import get_shipment_by_external_id_response_body as shared_get_shipment_by_external_id_response_body


@dataclasses.dataclass
class GetShipmentByExternalIDPathParams:
    external_shipment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'external_shipment_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetShipmentByExternalIDRequest:
    path_params: GetShipmentByExternalIDPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetShipmentByExternalIDResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    get_shipment_by_external_id_response_body: Optional[shared_get_shipment_by_external_id_response_body.GetShipmentByExternalIDResponseBody] = dataclasses.field(default=None)
    
