import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import carrier_name_with_settings_enum as shared_carrier_name_with_settings_enum
from ..shared import error_response_body as shared_error_response_body
from ..shared import dhl_express_settings_response_body as shared_dhl_express_settings_response_body
from ..shared import fedex_settings_response_body as shared_fedex_settings_response_body
from ..shared import ups_settings_response_body as shared_ups_settings_response_body


@dataclasses.dataclass
class GetCarrierSettingsPathParams:
    carrier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'carrier_id', 'style': 'simple', 'explode': False }})
    carrier_name: shared_carrier_name_with_settings_enum.CarrierNameWithSettingsEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'carrier_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetCarrierSettingsRequest:
    path_params: GetCarrierSettingsPathParams = dataclasses.field()
    

@dataclasses.dataclass
class GetCarrierSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    get_carrier_settings_response_body: Optional[Any] = dataclasses.field(default=None)
    
