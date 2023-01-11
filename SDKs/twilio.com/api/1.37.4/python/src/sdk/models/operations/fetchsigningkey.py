import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_signing_key as shared_api_v2010_account_signing_key


FETCH_SIGNING_KEY_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class FetchSigningKeyPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class FetchSigningKeySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class FetchSigningKeyRequest:
    path_params: FetchSigningKeyPathParams = dataclasses.field()
    security: FetchSigningKeySecurity = dataclasses.field()
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class FetchSigningKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_signing_key: Optional[shared_api_v2010_account_signing_key.APIV2010AccountSigningKey] = dataclasses.field(default=None)
    
