import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body
from ..shared import tag_shipment_response_body as shared_tag_shipment_response_body


@dataclasses.dataclass
class TagShipmentPathParams:
    shipment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shipment_id', 'style': 'simple', 'explode': False }})
    tag_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tag_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class TagShipmentRequest:
    path_params: TagShipmentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class TagShipmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    tag_shipment_response_body: Optional[shared_tag_shipment_response_body.TagShipmentResponseBody] = dataclasses.field(default=None)
    
