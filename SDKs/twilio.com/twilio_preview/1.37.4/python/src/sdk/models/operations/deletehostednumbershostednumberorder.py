import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_HOSTED_NUMBERS_HOSTED_NUMBER_ORDER_SERVERS = [
	"https://preview.twilio.com",
]


@dataclasses.dataclass
class DeleteHostedNumbersHostedNumberOrderPathParams:
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteHostedNumbersHostedNumberOrderSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteHostedNumbersHostedNumberOrderRequest:
    path_params: DeleteHostedNumbersHostedNumberOrderPathParams = dataclasses.field()
    security: DeleteHostedNumbersHostedNumberOrderSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteHostedNumbersHostedNumberOrderResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
