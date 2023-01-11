import dataclasses
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_new_signing_key as shared_api_v2010_account_new_signing_key


CREATE_NEW_SIGNING_KEY_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class CreateNewSigningKeyPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class CreateNewSigningKeyCreateNewSigningKeyRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class CreateNewSigningKeySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class CreateNewSigningKeyRequest:
    path_params: CreateNewSigningKeyPathParams = dataclasses.field()
    security: CreateNewSigningKeySecurity = dataclasses.field()
    request: Optional[CreateNewSigningKeyCreateNewSigningKeyRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class CreateNewSigningKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_new_signing_key: Optional[shared_api_v2010_account_new_signing_key.APIV2010AccountNewSigningKey] = dataclasses.field(default=None)
    
