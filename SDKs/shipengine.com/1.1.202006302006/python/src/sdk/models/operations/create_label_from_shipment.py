import dataclasses
from typing import Optional
from ..shared import create_label_from_shipment_request_body as shared_create_label_from_shipment_request_body
from ..shared import create_label_from_shipment_response_body as shared_create_label_from_shipment_response_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class CreateLabelFromShipmentPathParams:
    shipment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shipment_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateLabelFromShipmentRequest:
    path_params: CreateLabelFromShipmentPathParams = dataclasses.field()
    request: shared_create_label_from_shipment_request_body.CreateLabelFromShipmentRequestBody = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class CreateLabelFromShipmentResponseOutput:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    create_label_from_shipment_response_body: Optional[shared_create_label_from_shipment_response_body.CreateLabelFromShipmentResponseBodyOutput] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
