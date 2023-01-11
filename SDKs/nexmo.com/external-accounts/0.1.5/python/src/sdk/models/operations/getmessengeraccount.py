import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import security as shared_security
from ..shared import four_hundred_and_oneresponse as shared_four_hundred_and_oneresponse
from ..shared import messengeraccountresponse as shared_messengeraccountresponse


@dataclasses.dataclass
class GetMessengerAccountPathParams:
    external_id: str = dataclasses.field(metadata={'path_param': { 'field_name': 'external_id', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class GetMessengerAccountSecurity:
    basic_auth: Optional[shared_security.SchemeBasicAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    bearer_auth: Optional[shared_security.SchemeBearerAuth] = dataclasses.field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclasses.dataclass
class GetMessengerAccountRequest:
    path_params: GetMessengerAccountPathParams = dataclasses.field()
    security: GetMessengerAccountSecurity = dataclasses.field()
    

@dataclasses.dataclass
class GetMessengerAccountResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    four_hundred_and_one_response: Optional[shared_four_hundred_and_oneresponse.FourHundredAndOneResponse] = dataclasses.field(default=None)
    messenger_account_response: Optional[shared_messengeraccountresponse.MessengerAccountResponse] = dataclasses.field(default=None)
    
