import dataclasses
from typing import Optional
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class UntagShipmentPathParams:
    shipment_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'shipment_id', 'style': 'simple', 'explode': False }})
    tag_name: str = dataclasses.field(metadata={'path_param': { 'field_name': 'tag_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UntagShipmentRequest:
    path_params: UntagShipmentPathParams = dataclasses.field()
    

@dataclasses.dataclass
class UntagShipmentResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty_response_body: Optional[str] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
