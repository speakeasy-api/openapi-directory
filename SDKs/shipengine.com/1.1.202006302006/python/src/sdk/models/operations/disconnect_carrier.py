import dataclasses
from typing import Optional
from enum import Enum
from ..shared import carrier_name_enum as shared_carrier_name_enum
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class DisconnectCarrierPathParams:
    carrier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'carrier_id', 'style': 'simple', 'explode': False }})
    carrier_name: shared_carrier_name_enum.CarrierNameEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'carrier_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DisconnectCarrierRequest:
    path_params: DisconnectCarrierPathParams = dataclasses.field()
    

@dataclasses.dataclass
class DisconnectCarrierResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty_response_body: Optional[str] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
