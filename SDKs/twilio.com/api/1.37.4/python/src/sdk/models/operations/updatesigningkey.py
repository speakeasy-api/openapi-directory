import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from ..shared import security as shared_security
from ..shared import api_v2010_account_signing_key as shared_api_v2010_account_signing_key


UPDATE_SIGNING_KEY_SERVERS = [
	"https://api.twilio.com",
]


@dataclasses.dataclass
class UpdateSigningKeyPathParams:
    account_sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = dataclasses.field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclasses.dataclass
class UpdateSigningKeyUpdateSigningKeyRequest:
    friendly_name: Optional[str] = dataclasses.field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclasses.dataclass
class UpdateSigningKeySecurity:
    account_sid_auth_token: shared_security.SchemeAccountSidAuthToken = dataclasses.field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclasses.dataclass
class UpdateSigningKeyRequest:
    path_params: UpdateSigningKeyPathParams = dataclasses.field()
    security: UpdateSigningKeySecurity = dataclasses.field()
    request: Optional[UpdateSigningKeyUpdateSigningKeyRequest] = dataclasses.field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = dataclasses.field(default=None)
    

@dataclasses.dataclass
class UpdateSigningKeyResponse:
    content_type: str = dataclasses.field()
    status_code: int = dataclasses.field()
    api_v2010_account_signing_key: Optional[shared_api_v2010_account_signing_key.APIV2010AccountSigningKey] = dataclasses.field(default=None)
    
