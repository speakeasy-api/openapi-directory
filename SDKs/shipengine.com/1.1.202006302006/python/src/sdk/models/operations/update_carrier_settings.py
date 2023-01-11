import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from ..shared import carrier_name_with_settings_enum as shared_carrier_name_with_settings_enum
from ..shared import update_dhl_express_settings_request_body as shared_update_dhl_express_settings_request_body
from ..shared import update_fedex_settings_request_body as shared_update_fedex_settings_request_body
from ..shared import update_newgistics_settings_request_body as shared_update_newgistics_settings_request_body
from ..shared import update_ups_settings_request_body as shared_update_ups_settings_request_body
from ..shared import update_amazon_buy_shipping_request_body as shared_update_amazon_buy_shipping_request_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class UpdateCarrierSettingsPathParams:
    carrier_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'carrier_id', 'style': 'simple', 'explode': False }})
    carrier_name: shared_carrier_name_with_settings_enum.CarrierNameWithSettingsEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'carrier_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateCarrierSettingsRequest:
    path_params: UpdateCarrierSettingsPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class UpdateCarrierSettingsResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    empty_response_body: Optional[str] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
