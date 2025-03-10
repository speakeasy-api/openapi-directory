from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_ADDRESS_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateAddressPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAddressSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAddressRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateAddressPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateAddressSecurity = field(default=None)
    

@dataclass
class UpdateAddressResponses:
    api_v2010_account_address: Optional[shared.APIV2010AccountAddress] = field(default=None)
    

@dataclass
class UpdateAddressResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateAddressResponses]] = field(default=None)
    status_code: int = field(default=None)
    
