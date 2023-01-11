import dataclasses
from typing import Any,Optional
from enum import Enum
from ..shared import carrier_name_enum as shared_carrier_name_enum
from ..shared import connect_access_worldwide_request_body as shared_connect_access_worldwide_request_body
from ..shared import connect_amazon_buy_shipping_request_body as shared_connect_amazon_buy_shipping_request_body
from ..shared import connect_apc_request_body as shared_connect_apc_request_body
from ..shared import connect_asendia_request_body as shared_connect_asendia_request_body
from ..shared import connect_australia_post_request_body as shared_connect_australia_post_request_body
from ..shared import connect_canada_post_request_body as shared_connect_canada_post_request_body
from ..shared import connect_dhl_ecommerce_request_body as shared_connect_dhl_ecommerce_request_body
from ..shared import connect_dhl_express_request_body as shared_connect_dhl_express_request_body
from ..shared import connect_dhl_express_au_request_body as shared_connect_dhl_express_au_request_body
from ..shared import connect_dhl_express_ca_request_body as shared_connect_dhl_express_ca_request_body
from ..shared import connect_dhl_express_uk_request_body as shared_connect_dhl_express_uk_request_body
from ..shared import connect_dpd_request_body as shared_connect_dpd_request_body
from ..shared import connect_endicia_request_body as shared_connect_endicia_request_body
from ..shared import connect_fedex_request_body as shared_connect_fedex_request_body
from ..shared import connect_fedex_uk_request_body as shared_connect_fedex_uk_request_body
from ..shared import connect_firstmile_request_body as shared_connect_firstmile_request_body
from ..shared import connect_globegistics_request_body as shared_connect_globegistics_request_body
from ..shared import connect_imex_request_body as shared_connect_imex_request_body
from ..shared import connect_newgistics_request_body as shared_connect_newgistics_request_body
from ..shared import connect_ontrac_request_body as shared_connect_ontrac_request_body
from ..shared import connect_purolator_request_body as shared_connect_purolator_request_body
from ..shared import connect_royal_mail_request_body as shared_connect_royal_mail_request_body
from ..shared import connect_rr_donnelley_request_body as shared_connect_rr_donnelley_request_body
from ..shared import connect_seko_request_body as shared_connect_seko_request_body
from ..shared import connect_sendle_request_body as shared_connect_sendle_request_body
from ..shared import connect_stamps_request_body as shared_connect_stamps_request_body
from ..shared import connect_ups_request_body as shared_connect_ups_request_body
from ..shared import connect_carrier_response_body as shared_connect_carrier_response_body
from ..shared import error_response_body as shared_error_response_body


@dataclasses.dataclass
class ConnectCarrierPathParams:
    carrier_name: shared_carrier_name_enum.CarrierNameEnum = dataclasses.field(metadata={'path_param': { 'field_name': 'carrier_name', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class ConnectCarrierRequest:
    path_params: ConnectCarrierPathParams = dataclasses.field()
    request: Any = dataclasses.field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclasses.dataclass
class ConnectCarrierResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    connect_carrier_response_body: Optional[shared_connect_carrier_response_body.ConnectCarrierResponseBody] = dataclasses.field(default=None)
    error_response_body: Optional[shared_error_response_body.ErrorResponseBody] = dataclasses.field(default=None)
    
