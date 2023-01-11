import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import preview_hosted_numbers_hosted_number_order as shared_preview_hosted_numbers_hosted_number_order


FETCH_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class FetchHostedNumbersHostedNumberOrderPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchHostedNumbersHostedNumberOrderSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchHostedNumbersHostedNumberOrderRequest:
    path_params: FetchHostedNumbersHostedNumberOrderPathParams = dataclasses.field()
    security: FetchHostedNumbersHostedNumberOrderSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchHostedNumbersHostedNumberOrderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    preview_hosted_numbers_hosted_number_order: Optional[shared_preview_hosted_numbers_hosted_number_order.PreviewHostedNumbersHostedNumberOrder] = dataclasses.field(default=None)
    
