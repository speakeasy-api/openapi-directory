import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import update_shipment_request_body as shared_update_shipment_request_body
from ..shared import error_response_body as shared_error_response_body
from ..shared import update_shipment_response_body as shared_update_shipment_response_body


@dataclasses.dataclass
class UpdateShipmentPathParams:
    shipment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shipment_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateShipmentRequest:
    path_params: UpdateShipmentPathParams = dataclasses.field()
    request: shared_update_shipment_request_body.UpdateShipmentRequestBodyInput = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateShipmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    update_shipment_response_body: Optional[shared_update_shipment_response_body.UpdateShipmentResponseBody] = dataclasses.field(default=None)
    
