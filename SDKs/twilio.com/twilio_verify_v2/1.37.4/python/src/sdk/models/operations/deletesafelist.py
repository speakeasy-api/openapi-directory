import dataclasses
from typing import Optional
from ..shared import security as shared_security


DELETE_SAFELIST_SERVERS = [
	"https://verify.twilio.com",
]


@dataclasses.dataclass
class DeleteSafelistPathParams:
    phone_number: str = dataclasses.field(metadata={'path_param': { 'field_name': 'PhoneNumber', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class DeleteSafelistSecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class DeleteSafelistRequest:
    path_params: DeleteSafelistPathParams = dataclasses.field()
    security: DeleteSafelistSecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class DeleteSafelistResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    
